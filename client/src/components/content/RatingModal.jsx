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
                    console.log("useeffect", post);
                    setRating({
                        agree: post[0].agree,
                        disagree: post[0].disagree,
                        incorrect: post[0].incorrect,
                        spam: post[0].spam,
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
                <h4 onClick={() => ratePost("agree")}>{rating.agree}</h4>
            </div>

            <div>
                <h4 onClick={() => ratePost("disagree")}>disagree</h4>
                <h4 onClick={() => ratePost("agree")}>{rating.disagree}</h4>
            </div>

            <div>
                <h4 onClick={() => ratePost("incorrect")}>incorrect</h4>
                <h4 onClick={() => ratePost("agree")}>{rating.incorrect}</h4>
            </div>

            <div>
                <h4 onClick={() => ratePost("spam")}>spam</h4>
                <h4 onClick={() => ratePost("agree")}>{rating.spam}</h4>
            </div>

            <div className="error-post">
                <p>{error}</p>
            </div>
        </div>
    );
}
