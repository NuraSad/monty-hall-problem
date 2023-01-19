import React from "react";
import './GameStats.css'

const GameStats = ({games, winWithChange, winWithoutChange}) => {
    const wonGames = winWithChange + winWithoutChange;
    const winWithChangePercentage = Math.round((winWithChange/wonGames) * 100);
    const winWithoutChangePercentage = Math.round((winWithoutChange/wonGames) * 100);
    return (
        <div className="gameStats">
            <p> Number of game played: {games}{"\n"}
                Games won: {wonGames}{"\n"}
                Win with door change: {winWithChangePercentage}%{"\n"}
                Win without door change: {winWithoutChangePercentage}% </p> 
        </div>
    )
}

export default GameStats