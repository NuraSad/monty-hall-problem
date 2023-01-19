import React from "react";
import GameStats from "../GameStats/GameStats";
import './GameRules.css'

const GameRules = ({userDoor, games, winWithChange, winWithoutChange}) => {
    return (
        <div className="gameRulesField">
           <div className="gameRules">
            <p>How to play this game? Click on door below to start a game.</p> 
            {userDoor !== 0 ? <p>You choose the door number {userDoor}</p> : <p>Choose the door.</p>}
            </div> 
            <GameStats games={games} winWithChange = {winWithChange} winWithoutChange = {winWithoutChange}/> 
        </div>
        
    )
}

export default GameRules