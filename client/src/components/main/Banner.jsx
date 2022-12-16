import { useState, useEffect } from "react";

export default function Banner({ id }) {
    const [banner, setBanner] = useState({ author: "", title: "" });

    useEffect(() => {
        fetch(`/book/${id}/json`)
            .then((res) => res.json())
            .then((book) => {
                console.log(book);
                setBanner({ author: book.author, title: book.title });
            });
    });

    return (
        <div className="banner">
            <h2>
                {banner.author} <span>{banner.title}</span>
            </h2>
        </div>
    );
}
