import React from 'react'
import Post from './Post.js'
import { motion, AnimateSharedLayout } from 'framer-motion'

function Posts({ posts, setSelectedPost }) {
    return (
        <div>
            {posts.map((post) => (
                <Post key={post.id}
                    post={post}
                    posts={posts}
                    setSelectedPost={setSelectedPost} />
            ))}
        </div>
    )
}

export default Posts
