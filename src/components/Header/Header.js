import React from 'react'
import reactLogo from '../assets/react.svg'
import "./Header.css"

function Header() {
    return (
        <div className="logo-container">
            <img className="react-logo" src={reactLogo} alt="logo"/>
        </div>
    )
}

export default Header
