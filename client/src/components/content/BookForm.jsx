import { useState } from "react";

export default function BookForm({ getAllBooks }) {
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
            <input
                type="text"
                name="author"
                placeholder="AUTHOR"
                onChange={(e) => handleInputChange(e)}
            />

            <input
                type="text"
                name="title"
                placeholder="TITLE"
                onChange={(e) => handleInputChange(e)}
            />

            <button onClick={() => handleSubmit()}>submit</button>
        </div>
    );
}
