import React from 'react'
import Post from './Post.js'

function Posts({ posts }) {
    return (
        <div>
            {posts.map((post) => (
                <Post key={post.id}
                      post={post} 
                      posts={posts} />
            ))}
        </div>
    )
}

export default Posts
