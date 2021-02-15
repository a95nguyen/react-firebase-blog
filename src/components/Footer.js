import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
    return (
        <footer>
            <p>Made by Amy &copy; with ☕</p>
            <Link to='/about'>About</Link>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#a2d9ff" fill-opacity="1" d="M0,0L48,37.3C96,75,192,149,288,176C384,203,480,181,576,149.3C672,117,768,75,864,96C960,117,1056,203,1152,234.7C1248,267,1344,245,1392,234.7L1440,224L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path></svg>
        </footer>
    )
}

export default Footer
