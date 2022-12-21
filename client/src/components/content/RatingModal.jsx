import { useState, useEffect } from "react";

//receives single post as prop, holds id (included rating not up to date)
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
            .then((ratings) => {
                console.log(ratings);
                if (ratings.success === true) {
                    setRating({
                        agree: ratings.agree,
                        disagree: ratings.disagree,
                        incorrect: ratings.incorrect,
                        spam: ratings.spam,
                    });
                } else {
                    setError(ratings.message);
                }
            });
    };

    useEffect(() => {
        fetch(`/rating/${post.id}`)
            .then((res) => res.json())
            .then((post) => {
                if (post) {
                    console.log(post);
                    setRating({
                        agree: post.agree,
                        disagree: post.disagree,
                        incorrect: post.incorrect,
                        spam: post.spam,
                    });
                } else {
                    console.log("failed getting all ratings");
                }
            });
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
