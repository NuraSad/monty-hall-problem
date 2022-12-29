import React from "react";
import './Door.css';


const Door = (props) => {
    return(
        <img 
            id ={props.id}
            // When i need to change images based on assign doors
            src={require('./door.jpg')}
            alt = 'door'
            className="Door"
            onClick={props.onClick}/>
            // src={require(`../../public/images/${props.type}.svg`)} 
            // alt={props.type}
            // className={classes.Icon} />
    );
}


export default Door