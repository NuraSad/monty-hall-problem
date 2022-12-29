import React from 'react'
import './Button.css';

const Button = (props) => {
    return(
        <button className="Button"
                type={props.type} 
                name={props.name}
                onClick={props.onClick}>{props.children}
        </button>

    );
}

export default Button;