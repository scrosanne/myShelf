import { useState } from "react";

export default function BookForm({ getAllBooks, books }) {
    const [error, setError] = useState("");
    const [input, setInput] = useState({});

    const handleInputChange = (e) => {
        const text = e.currentTarget.value;
        setInput({
            ...input,
            [e.currentTarget.name]: text,
        });
    };

    const handleSubmit = () => {
        //check for complete input
        if (!input.author || !input.title) {
            setError("forgot something?");
            return;
        }

        //returns undefined if book does not yet exist
        const doubleItem = books.find(
            (book) =>
                book.author === input.author.toUpperCase() &&
                book.title === input.title.toUpperCase()
        );

        if (doubleItem !== undefined) {
            setError("book already exists!");
            return;
        }

        fetch("/book", {
            method: "POST",
            body: JSON.stringify(input), //stringify object with form input
            headers: { "Content-Type": "application/json" },
        })
            .then((res) => res.json())
            .then((response) => {
                if (response.success === true) {
                    getAllBooks();
                } else {
                    setError("pls try again");
                }
            });
    };

    return (
        <div className="book-form">
            <p className="error-book-form">{error}</p>
            <textarea
                type="text"
                name="author"
                placeholder="AUTHOR"
                onChange={(e) => handleInputChange(e)}
            ></textarea>

            <textarea
                type="text"
                name="title"
                placeholder="TITLE"
                onChange={(e) => handleInputChange(e)}
            ></textarea>

            <button onClick={() => handleSubmit()}>submit</button>
        </div>
    );
}
