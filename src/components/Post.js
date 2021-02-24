import React from 'react'
import { useState, useLayoutEffect } from 'react'

function Post({ post, posts, setSelectedPost }) {
    const [isOpen, setOpen] = useState(false)

    return (
        <div className='post' style={{ cursor: 'default' }}>
            <h3><b>{post.title}</b></h3>
            <p style={{ display: "inline-block" }}>{post.description.slice(0, 50) + '...'}</p>
            <button className="btn" onClick={() => setSelectedPost(posts[post.id - 1])}>→</button>
        </div>
    )
}

export default Post
