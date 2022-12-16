import { useState } from "react";

export default function PostForm({ id }) {
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
        //console.log(input);
        fetch("/post", {
            method: "POST",
            body: JSON.stringify({ input, id }), //stringify object with form input
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
        <div className="post-form">
            <div className="top">
                <input
                    type="text"
                    name="content"
                    placeholder="write somethig here!"
                    onChange={(e) => handleInputChange(e)}
                />
            </div>

            <div className="bottom">
                {/* make dropdown  */}

                <select
                    onChange={(e) => handleInputChange(e)}
                    name="category"
                    id="category"
                >
                    <option value="quote">#quote</option>
                    <option value="thoughts">#thoughts</option>
                </select>
                <button onClick={() => handleSubmit()}>+</button>
            </div>
        </div>
    );
}
