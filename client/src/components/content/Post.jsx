export default function Post({ post }) {
    return (
        <div className="book">
            <p>{post.content}</p>
            <h4>{post.category}</h4>
        </div>
    );
}
