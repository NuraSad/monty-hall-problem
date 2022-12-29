import React from "react";
import './GameRules.css'

const GameRules = ({userDoor}) => {
    return (
        <div className="gameRules">
            <p>How to play this game? Click on door below to start a game.</p> 
            {userDoor !== 0 ? <p>You choose the door number {userDoor}</p> : <p>Choose the door.</p>}
        </div>
    )
}

export default GameRules