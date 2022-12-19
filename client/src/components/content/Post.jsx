import { useState } from "react";

export default function Post({ post }) {
    const [showRating, setShowRating] = useState(false);
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
                    setRating({
                        agree: post.agree,
                        disagree: post.disagree,
                        incorrect: post.incorrect,
                        spam: post.spam,
                    });
                } else {
                    //setError("pls try again");
                }
            });
    };

    return (
        <div className="post">
            <div className="post-top">
                <p>{post.content}</p>
            </div>

            <div className="post-bottom">
                <h4>
                    <span>#</span>
                    {post.category}
                </h4>

                <h2 onClick={() => setShowRating(true)}>%</h2>
            </div>

            {/* r a t i n g  m o d a l  */}
            {showRating === true && (
                <div className="rating">
                    <div>
                        <h4 onClick={() => ratePost("agree")}>agree</h4>
                        <h4>{rating.agree > 0 && rating.agree}</h4>
                    </div>

                    <div>
                        <h4 onClick={() => ratePost("disagree")}>disagree</h4>
                        <h4>{rating.disagree > 0 && rating.disagree}</h4>
                    </div>

                    <div>
                        <h4 onClick={() => ratePost("incorrect")}>incorrect</h4>
                        <h4>{rating.incorrect > 0 && rating.incorrect}</h4>
                    </div>

                    <div>
                        <h4 onClick={() => ratePost("spam")}>spam</h4>
                        <h4>{rating.spam > 0 && rating.spam}</h4>
                    </div>

                    <h2 onClick={() => setShowRating(false)}>-</h2>
                </div>
            )}
        </div>
    );
}
