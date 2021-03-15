import React from 'react'
import Post from './Post.js'
import { motion, AnimateSharedLayout } from 'framer-motion'
import { useState } from "react";
import { getFirebase } from '../Firebase';

function Posts({ setSelectedPost }) {
    // loading posts state
    const [loading, setLoading] = useState(true);

    // array of blogPosts state
    const [blogPosts, setBlogPosts] = useState([]);

    if (loading && !blogPosts.length) {
        getFirebase()
            .database()
            .ref("/posts")
            //.orderByChild("dateFormatted")
            .once("value")
            .then(snapshot => {
                let posts = [];
                const snapshotVal = snapshot.val();
                for (let slug in snapshotVal) {
                    posts.push(snapshotVal[slug]);
                }

                setBlogPosts(posts);
                setLoading(false);
            });
    }

    if (loading) {
        return <h3>Loading...</h3>;
    }

    return (
        <div>
            {blogPosts.map((post) => (
                <Post key={post.id}
                    post={post}
                    posts={blogPosts}
                    setSelectedPost={setSelectedPost} />
            ))}
        </div>
    )
}

export default Posts
