import { useState, useEffect } from "react";
// import { Link } from "react-router-dom";

import Navbar from "../navbar/Navbar";
import BookForm from "../content/BookForm";
import Book from "../content/Book";

export default function Shelf() {
    const [books, setBooks] = useState([]); //search query

    useEffect(() => {
        fetch("/books/all")
            .then((res) => res.json())
            .then((books) => {
                if (books) {
                    setBooks([...books]);
                } else {
                    //"success false"
                }
            });
    }, []);

    return (
        <>
            <Navbar />
            <div className="shelf">
                <BookForm />
                {books.map((book) => {
                    return (
                        <div key={book.id} className="book">
                            <h2>{book.author}</h2>
                            <h4>{book.title}</h4>
                        </div>
                    );
                })}
            </div>
        </>
    );
}
