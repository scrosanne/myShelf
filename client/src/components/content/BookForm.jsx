import { useState } from "react";

export default function BookForm() {
    //const [error, setError] = useState("");
    const [input, setInput] = useState({});

    const handleInputChange = (e) => {
        const text = e.currentTarget.value;
        setInput({
            ...input,
            [e.currentTarget.name]: text,
        });
    };
    const handleSubmit = () => {
        console.log(input);
        fetch("/book", {
            method: "POST",
            body: JSON.stringify(input), //stringify object with form input
            headers: { "Content-Type": "application/json" },
        })
            .then((res) => res.json())
            .then((response) => {
                if (response.success === true) {
                    location.reload();
                } else {
                    //setError("pls try again");
                }
            });
    };

    return (
        <div className="book-form">
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
