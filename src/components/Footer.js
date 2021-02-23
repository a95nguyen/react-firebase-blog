import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
    return (
        <footer>
            <div>
                <Link to='/about' className="link"><b>about</b></Link>
                <p style={{ color: 'lightgrey' }}>&copy; 2021 | made with ☕ by Amy Nguyen</p>
            </div>
        </footer>
    )
}

export default Footer
