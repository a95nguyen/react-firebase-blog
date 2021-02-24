import React from 'react'
import { useState } from 'react'

const Modal = ({ selectedPost, setSelectedPost }) => {

    const handleClick = (e) => {
        setSelectedPost({});
    }

    return (
        <div className="backdrop">
            <div className="modal" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                <h1 style={{ fontWeight: "bold", color: '#85d8db' }}>{selectedPost.title}</h1>
                <p>{selectedPost.description}</p>
                <button className="modalbtn" onClick={handleClick}>X</button>
            </div>
        </div>
    )
}

export default Modal
