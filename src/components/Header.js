import React from 'react'
import logo from './topimage.png'
import { useLayoutEffect } from 'react'

function Header() {
    return (
        <div>
            <img src={logo} style={{ width: '100%', height: 'auto' }} alt="Logo" />
            <br></br>
            <br></br>
            <h1 style={{ position: 'relative', top: '30px', left: '50%', fontStyle: 'italic', transform: 'translate(-50%, -50%)', textAlign: 'center', color: '#85d8db' }}>ALL THINGS MUSIC</h1>
            <p style={{ textAlign: 'center', color: 'grey' }}>My (not-so-needed) takes on musical masterpieces</p>
        </div>
    )
}

export default Header
