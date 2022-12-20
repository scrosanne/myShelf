import { useState, useEffect } from "react";

export default function RatingModal({ post, setShowRating }) {
    const [error, setError] = useState("");
    const [rating, setRating] = useState({
        agree: 0,
        disagree: 0,
        incorrect: 0,
        spam: 0,
    });

    const ratePost = (rating) => {
        fetch(`/post/${post.id}`, {
            method: "POST",
            body: JSON.stringify({ rating }), //stringify object with form input
            headers: { "Content-Type": "application/json" },
        })
            .then((res) => res.json())
            .then((post) => {
                if (post.success === true) {
                    updateRating(post);
                } else {
                    setError(post.message);
                }
            });
    };

    const updateRating = (post) => {
        setRating({
            agree: post.agree,
            disagree: post.disagree,
            incorrect: post.incorrect,
            spam: post.spam,
        });
    };

    useEffect(() => {
        updateRating(post);
    }, []);

    return (
        <div className="rating" onMouseLeave={() => setShowRating(false)}>
            <div>
                <h4 onClick={() => ratePost("agree")}>agree</h4>
                <h4>{rating.agree}</h4>
            </div>

            <div>
                <h4 onClick={() => ratePost("disagree")}>disagree</h4>
                <h4>{rating.disagree}</h4>
            </div>

            <div>
                <h4 onClick={() => ratePost("incorrect")}>incorrect</h4>
                <h4>{rating.incorrect}</h4>
            </div>

            <div>
                <h4 onClick={() => ratePost("spam")}>spam</h4>
                <h4>{rating.spam}</h4>
            </div>

            <div className="error-post">
                <p>{error}</p>
            </div>
        </div>
    );
}
