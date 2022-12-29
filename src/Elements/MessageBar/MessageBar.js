import React from "react";
import './MessageBar.css'

const MessageBar = (props) => {
    if (props.gameStage === 2) {
        return (
            <div className="MessageBar">
                <p>Show host opened door number {props.message}. There is a cat. Do you want to change your original door?</p>
            </div> 
        )
    } else {
        return (
            <div className="MessageBar">
               {props.gameResult ? <p className="Won">You won!</p> : <p className="Lost">You lost!</p>}
            </div>
        )
    }
}

export default MessageBar