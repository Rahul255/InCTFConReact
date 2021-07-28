import React from 'react'
import './NavBar.css'
import {Link} from 'react-router-dom'
import Logo from '../../images/logomain.png'

function NavBar() {
    return (
        <div className="navbar">
            <img className="logo" src={Logo} alt="Netflix Logo"/>
            <div className="nav-right">
                <Link to='/goal' className="right">Goal</Link>
                <Link to='/about' className="right">About</Link>
                <Link to='/' className="right" >Home</Link>
            </div>
            
        </div>
    )
}

export default NavBar
