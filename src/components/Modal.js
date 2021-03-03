import React from 'react'
import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import ScrollToTop from "./ScrollTop";

const Modal = ({ selectedPost, setSelectedPost }) => {
    useEffect(() => {
        if ((!(JSON.stringify(selectedPost) == JSON.stringify({})))) {
            document.body.style.overflow = 'hidden';
        }
        return () => {
            document.body.style.overflow = 'unset';
            document.body.style.paddingRight = '0px';
        };
    }, [selectedPost]);
    
    const handleClick = (e) => {
        setSelectedPost({});
        <ScrollToTop />
    }

    return (
        <div className="backdrop">
            <div className="modal">
                <h1 style={{ fontWeight: "bold", color: '#85d8db' }}>{selectedPost.title}</h1>
                <button className="modalbtn" onClick={handleClick}>X</button>
                <p style={{ fontStyle: 'italic', color: 'gray' }}>{"'" + selectedPost.quote + "'"}</p>
                <br></br>
                <p>{selectedPost.description}</p>
                <br></br>
                <motion.div className="img-wrap" whileHover={{ opacity: 1 }}>
                    <img src={selectedPost.gif}
                        style={{
                            display: 'block',
                            marginLeft: 'auto', 
                            marginRight: 'auto', 
                            minHeight: '60%', 
                            borderRadius: '10px'
                        }} />
                </motion.div>
            </div>
        </div>
    )
}

export default Modal
