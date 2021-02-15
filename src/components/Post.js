import React from 'react'
import blogPage from './blogPage.js'

function Post({ post, posts }) {
    const blogPage = (e) => {
        console.log(e)
        console.log(posts.filter((post) => <h3>post.title</h3> == e.target))
    }
    return (
        <div className='post' onClick={blogPage}>
            <h3>{post.title}
            </h3>
            <p>{post.description}</p>
        </div>
    )
}

export default Post
