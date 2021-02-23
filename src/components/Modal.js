import React from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const Modal = ({ selectedPost, setSelectedPost }) => {

    const handleClick = (e) => {
        setSelectedPost({});
    }

    return (
        <AnimatePresence>
            <div className="backdrop">
                <div className="modal" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                    <h1 style={{ fontWeight: "bold", color: '#85d8db' }}>{selectedPost.title}</h1>
                    <p>{selectedPost.description}</p>
                    <button className="modalbtn" onClick={handleClick}>X</button>
                </div>
            </div>
        </AnimatePresence>
    )
}

export default Modal
