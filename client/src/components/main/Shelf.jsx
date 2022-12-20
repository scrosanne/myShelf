import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import Navbar from "../navbar/Navbar";
import BookForm from "../content/BookForm";
import Book from "../content/Book";

export default function Shelf() {
    const [books, setBooks] = useState([]);
    const [query, setQuery] = useState("");

    const navigate = useNavigate();

    const openBook = (e, id) => {
        navigate(`/book/${id}`);
    };

    const getAllBooks = () => {
        fetch("/books")
            .then((res) => res.json())
            .then((books) => {
                if (books) {
                    console.log("books", books);
                    setBooks([...books]);
                } else {
                    //"success false"
                }
            });
    };

    useEffect(() => {
        getAllBooks();
    }, []);

    const filteredBooks = query
        ? books.filter((book) => {
            return book.author == query;
        })
        : books;
    // console.log("filteredBooks", filteredBooks);

    return (
        <>
            <Navbar setQuery={setQuery} />

            <div className="shelf">
                <BookForm getAllBooks={getAllBooks}/>

                {filteredBooks.map((book) => {
                    return (
                        <Book key={book.id} book={book} openBook={openBook} />
                    );
                })}
            </div>
        </>
    );
}
