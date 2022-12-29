import React from "react";
import Logo from '../../Elements/Logo/Logo'
import './NavBar.css';

const NavBar = () => {
    return (
        <div className="NavBar">
            <div className="wrapper">
               <div className="NavBar-logo">
                <Logo />
                </div>
                <p className="NavBar-text">Monty Hall Problem</p> 
            </div>
            
        </div>
    )
}

export default NavBar