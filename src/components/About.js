import React from 'react'
import { Link } from 'react-router-dom'
import Header from './Header'
import { useLayoutEffect } from 'react'

function About() {
    useLayoutEffect(() => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    });

    return (
        <div>
            <Header />
            <br></br>
            <div className='container' style={{ textAlign: "center" }}>
                <h4>Growing up, I've always been surrounded by music - whether it be the piano, my school band in which I played the flute, my church choir,
                    or just my daily musings to my favourite tracks. Pandemic life has reconnected me back to these roots.
                    I've discovered a wide range of songs in the time being that I wanted to share with those reading. Hope you enjoy! 😁</h4>
                <br></br>
                <Link to='/' className="link">home</Link>
            </div>
            <br></br>
            <br></br>
            <br></br>
        </div>
    )
}

export default About
