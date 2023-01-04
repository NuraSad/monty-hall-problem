import React from "react";
import './Cat.css';


const Cat = () => {
    return(
        <img 
            src={require('./cat2.jpg')}
            alt = 'cat'
            className="Cat"/>
    );
}


export default Cat