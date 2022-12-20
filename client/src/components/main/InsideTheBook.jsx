import { useState, useEffect } from "react";
import { useParams } from "react-router";

import Navbar from "../navbar/Navbar";
import PostForm from "../content/PostForm";
import Banner from "../main/Banner";
import Post from "../content/Post";

export default function InsideTheBook() {
    const [posts, setPosts] = useState([]);
    const [category, setCategory] = useState("");

    const { id } = useParams(); //get id from url

    const getAllPosts = () => {
        fetch(`/posts/${id}`)
            .then((res) => res.json())
            .then((posts) => {
                if (posts) {
                    setPosts([...posts]);
                } else {
                    console.log("failed getting all posts");
                }
            });
    };

    const filteredPosts = category
        ? posts.filter((post) => {
            if(category=="all") {
                return posts;
            }
            return post.category == category;
        })
        : posts;


    useEffect(() => {
        getAllPosts();
    }, []);
    
    return (
        <>
            <Navbar setCategory={setCategory} />

            <Banner id={id} />

            <div className="inside">
                <PostForm id={id} getAllPosts={getAllPosts} />

                {filteredPosts.map((post) => {
                    return <Post key={post.id} post={post} />;
                })}
            </div>
        </>
    );
}
