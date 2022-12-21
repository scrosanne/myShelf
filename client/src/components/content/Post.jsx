import { useState } from "react";
import RatingModal from "./RatingModal";

export default function Post({ post }) {
    const [showRating, setShowRating] = useState(false);

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

                <h2 onMouseEnter={() => setShowRating(true)}>
                    <i class="fa-thin fa-comment"></i>
                </h2>
            </div>

            {showRating && (
                <RatingModal post={post} setShowRating={setShowRating} />
            )}
        </div>
    );
}
