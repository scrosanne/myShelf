export default function Post({ post }) {
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
            </div>
        </div>
    );
}
