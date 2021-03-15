import React from 'react'
import Header from './Header'
import { useState } from 'react'
import { getFirebase } from "../Firebase";

function AddPost() {
    const [title, setTitle] = useState("");
    const [slug, setSlug] = useState("");
    const [coverImage, setCoverImage] = useState("");
    const [coverImageAlt, setCoverImageAlt] = useState("");
    const [description, setDescription] = useState("");

    return (
        <div>
            <Header />
            <br></br>
            <div className='container' style={{ textAlign: "center", minHeight: "500px" }}>
                <label>Title </label>
                <input id="title-field" type="text" onChange={({ target: { value } }) => {setTitle(value)}}/>
                <label>Description</label>
                <input id="description" type="text" onChange={({ target: { value } }) => {setDescription(value)}}/>

            </div>
            <br></br>
            <br></br>
            <br></br>
        </div>
    )
}

export default AddPost
