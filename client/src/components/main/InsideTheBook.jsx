import { useState, useEffect } from "react";
import { useParams } from "react-router";

import Navbar from "../navbar/Navbar";
import PostForm from "../content/PostForm";
import Banner from "../main/Banner";
import Post from "../content/Post";

export default function InsideTheBook() {
    const [posts, setPosts] = useState([]);
    const [query, setQuery] = useState("");

    const { id } = useParams(); //get id from url

    useEffect(() => {
        //get all posts
        fetch(`/posts/${id}`)
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
            <Navbar setQuery={setQuery} />

            <Banner id={id} />

            <div className="inside">
                <PostForm id={id} />

                {posts.map((post) => {
                    return <Post key={post.id} post={post} />;
                })}
            </div>
        </>
    );
}
