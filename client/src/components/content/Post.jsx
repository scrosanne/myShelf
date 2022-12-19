import { useState } from "react";

export default function Post({ post }) {
    const [showRating, setShowRating] = useState(false);

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
                            <h4>yes</h4>
                            <h4>no</h4>
                            <h4>false</h4>
                        </div>
                        <h2 onClick={() => setShowRating(false)}>-</h2>
                    </>
                )}
            </div>
        </div>
    );
}
