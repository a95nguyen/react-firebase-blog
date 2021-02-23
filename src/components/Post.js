import React from 'react'

function Post({ post, posts, setSelectedPost }) {
    return (
        <div className='post' style={{ cursor: 'default'}}>
            <h3><b>{post.title}</b></h3>
            <p style={{ display: "inline-block" }}>{post.description}</p>
            <button className="btn" onClick={() => setSelectedPost(posts[post.id-1])}>→</button>
        </div>
    )
}

export default Post
