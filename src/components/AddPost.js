import React from 'react'
import Header from './Header'
import { useState } from 'react'
import { getFirebase } from "../Firebase";
import { useLayoutEffect } from 'react'
import { Alert } from 'react-alert'

// title, gif, quote, description
const labelStyles = {
    display: "block",
    marginBottom: 4
};

// input boxes
const inputStyles = {
    width: "100%",
    height: "2rem",
    lineHeight: "2rem",
    verticalAlign: "middle",
    fontSize: "1rem",
    marginBottom: "1.5rem",
    padding: "0 0.25rem"
};


function AddPost({ history }) {
    const [id, setId] = useState("");
    const [title, setTitle] = useState("");
    const [quote, setQuote] = useState("");
    const [gif, setGif] = useState("");
    const [description, setDescription] = useState("");
    const [errorMessage, setErrorMessage] = useState("");
    const handleClick = () => {
        setErrorMessage("Example error message!")
      }
      
    // is it okay to be an async function.. i don't know
    async function createPost() {
        var postListRef = getFirebase().database().ref('posts')

        // getting number of children in Firebase
        let numChild = await postListRef.once("value")
            .then(function (snapshot) {
                return snapshot.numChildren();
            })

        if (quote == "" || title == "" || gif == "" || description == "") {
            alert("Error! One or more fields were left empty.")
        } else {
            var newPostRef = postListRef.push();
            newPostRef.set({
                title,
                quote,
                id: numChild + 1,
                gif,
                description
            })
            history.push(`/`)
        }
    }

    return (
        <div>
            <Header />
            <br></br>
            <div className='container' style={{ minHeight: "500px" }}>

                <label style={labelStyles} htmlFor="title-field">
                    Title
                </label>
                <input
                    style={inputStyles}
                    id="title-field"
                    type="text"
                    value={title}
                    onChange={({ target: { value } }) => { setTitle(value); }} />

                <label style={labelStyles} htmlFor="title-field">
                    Quote
                </label>
                <input
                    style={inputStyles}
                    id="quote-field"
                    type="text"
                    value={quote}
                    onChange={({ target: { value } }) => { setQuote(value); }} />

                <label style={labelStyles} htmlFor="title-field">
                    Gif Link
                </label>
                <input
                    style={inputStyles}
                    id="gif-field"
                    type="text"
                    value={gif}
                    onChange={({ target: { value } }) => { setGif(value); }} />

                <label style={labelStyles} htmlFor="title-field">
                    Description
                </label>
                <textarea
                    style={{ ...inputStyles, height: 200, verticalAlign: "top", fontFamily: "Poppins" }}
                    id="description-field"
                    type="text"
                    value={description}
                    onChange={({ target: { value } }) => { setDescription(value); }} />

                <div style={{ textAlign: "right" }}>
                    <button
                        className="addPost"
                        onClick={createPost}>
                        Create
                    </button>
                </div>
            </div>
            <br></br>
            <br></br>
            <br></br>
        </div>
    )
}

export default AddPost
