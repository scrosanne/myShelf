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
                    setBooks([...books]);
                } else {
                    console.log("failed fetching all books");
                }
            });
    };

    const filteredBooks = query
        ? books.filter((book) => {
            return book.author.includes(query.toUpperCase()) || book.title.includes(query.toUpperCase());
        })
        : books;
    console.log("filteredBooks", filteredBooks);

    useEffect(() => {
        getAllBooks();
    }, []);

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
