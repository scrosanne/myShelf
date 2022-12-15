import { useState, useEffect } from "react";
import { useParams } from "react-router";

// import PostForm from "../content/BookForm";

export default function Shelf() {
    const [posts, setPosts] = useState([]);
    // const [query, setQuery] = useState("");

    const { id } = useParams(); //get id from url

    useEffect(() => {
        //get all posts
        fetch(`/book/${id}`)
            .then((res) => res.json())
            .then((posts) => {
                if (posts) {
                    console.log("posts", posts);
                    setPosts([...posts]);
                } else {
                    //"success false"
                }
            });
    }, []);

    return (
        <>
            {/* <div className="navbar">
                <h1>myShelf</h1>
                <div className="search">
                    <input
                        onChange={(e) => setQuery(e.currentTarget.value)}
                        type="text"
                        name="query"
                        id=""
                        placeholder="search for author"
                    />
                </div>
            </div> */}

            {/* <div className="shelf">
                <PostForm />
                {posts.map((post) => {
                    return (
                        <div key={post.id} className="post">
                            <p>{post.content}</p>
                            <h4>{post.category}</h4>
                        </div>
                    );
                })}
            </div> */}

            {/* Banner Component */}

            <div className="book">
                <p>this is a comment</p>
            </div>
        </>
    );
}
