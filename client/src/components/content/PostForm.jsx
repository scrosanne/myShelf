import { useState } from "react";

export default function PostForm({ id, getAllPosts }) {
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
        if (!input.category || !input.content) {
            setError("something is missing");
            return;
        }

        fetch("/post", {
            method: "POST",
            body: JSON.stringify({ input, id }),
            headers: { "Content-Type": "application/json" },
        })
            .then((res) => res.json())
            .then((response) => {
                if (response.success === true) {
                    getAllPosts();
                    setInput({ content: "", category: "" });
                } else {
                    setError("pls try again");
                }
            });
    };

    return (
        <div className="post-form">
            <div className="post-top">
                <p className="error-post-form">{error}</p>
                <textarea
                    type="text"
                    name="content"
                    placeholder="choose a category and write somethig here!"
                    onChange={(e) => handleInputChange(e)}
                    value={input.content}
                ></textarea>
            </div>

            <div
                className="post-bottom"
                style={{ borderTop: "2px dashed black" }}
            >
                <select
                    onChange={(e) => handleInputChange(e)}
                    name="category"
                    id="category"
                >
                    <option value="category">category</option>
                    <option value="quote">quote</option>
                    <option value="thoughts">thoughts</option>
                    <option value="take away">take away</option>
                    <option value="storyline">storyline</option>
                    <option value="characters">characters</option>
                    <option value="best loved">best loved</option>
                    <option value="reads alike">reads alike</option>
                </select>
                <button onClick={() => handleSubmit()}>+</button>
            </div>
        </div>
    );
}
