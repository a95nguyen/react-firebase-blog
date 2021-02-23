import React from 'react'

const Modal = ({ selectedPost, setSelectedPost }) => {

    const handleClick = (e) => {
        setSelectedPost({});
    }

    return (
        <div className="backdrop">
            <div className="modal">
                <h1 style={{ fontWeight: "bold" }}>{selectedPost.title}</h1>
                <p>{selectedPost.description}</p>
                <button className="modalbtn" onClick={handleClick}>X</button>
            </div>
        </div>
    )
}

export default Modal
