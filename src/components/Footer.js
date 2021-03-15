import React from 'react'
import { Link } from 'react-router-dom'
import AddPost from './AddPost'

const Footer = () => {
    return (
        <footer>
            <div>
                <Link to='/about' className="link"><b>about</b></Link>
                <o style={{ color: '#bed2d3' }}> | </o>
                <Link to='/addpost' className="link"><b>add</b></Link>
                <p style={{ color: 'lightgrey' }}>&copy; 2021 | made with ☕ by Amy Nguyen</p>
            </div>
        </footer>
    )
}

export default Footer
