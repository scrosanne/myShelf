import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import Navbar from "../navbar/Navbar";
import BookForm from "../content/BookForm";
// import Book from "../content/Book";

export default function Shelf() {
    const [books, setBooks] = useState([]);
    const [query, setQuery] = useState("");

    const navigate = useNavigate();

    const openBook = (e, id) => {
        navigate(`/book/${id}`);
    };

    useEffect(() => {
        //get all books
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
    }, []);

    const filteredBooks = query
        ? books.filter((book) => {
              return book.author == query;
          })
        : books;
    // console.log("filteredBooks", filteredBooks);

    return (
        <>
            {/* n a v i g a t i o n   b a r */}
            <div className="navbar">
                <h1>myShelf</h1>
                <div className="search">
                    <input
                        onChange={(e) => setQuery(e.currentTarget.value)}
                        type="text"
                        name="query"
                        id=""
                        placeholder="search for author"
                    />
                </div>
            </div>

            {/* i t e r a t e   o v e r   b o o k s */}
            {/* <Navbar getSearchQuery={getSearchQuery} /> */}
            <div className="shelf">
                <BookForm />
                {filteredBooks.map((book) => {
                    return (
                        <div
                            key={book.id}
                            className="book"
                            onClick={(e) => openBook(e, book.id)}
                        >
                            <h2>{book.author}</h2>
                            <h4>{book.title}</h4>
                        </div>
                    );
                })}
            </div>
        </>
    );
}
