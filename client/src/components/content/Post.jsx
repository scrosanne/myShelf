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
                {showRating === false && (
                    <>
                        <h4>
                            <span>#</span>
                            {post.category}
                        </h4>

                        <h2 onClick={() => setShowRating(true)}>+</h2>
                    </>
                )}

                {showRating === true && (
                    <>
                        <div className="rating">
                            <h4 onClick={() => ratePost("agree")}>yes</h4>
                            <h4 onClick={() => ratePost("disagree")}>no</h4>
                            <h4 onClick={() => ratePost("incorrect")}>false</h4>
                        </div>
                        <h2 onClick={() => setShowRating(false)}>-</h2>
                    </>
                )}
            </div>
        </div>
    );
}
