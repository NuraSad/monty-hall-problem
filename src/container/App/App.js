import React, { useState, useEffect } from 'react';
import './App.css';
import Description from '../../components/Description/Description';
import NavBar from '../../components/NavBar/NavBar';
import GameRules from '../../components/GameRules/GameRules';
import GameField from '../../components/GameField/GameFIeld';
import Footer from '../../components/Footer/Footer';



function App () {
  
  let winDoor = Math.floor(Math.random() * 3) + 1;
  const [winningDoor, setWinningDoor] = useState(winDoor);
  const [gameStage, setGameStage] = useState(1);
  const [userDoor, setUserDoor] = useState(0);
  const [gameResult, setGameResult] = useState(false)
  // const [changedDoor, setChangeDoor] = useState(false)

  const handleUserDoor = (door) => {
      setUserDoor(parseInt(door.currentTarget.id));
      setGameStage(gameStage+1);
  }
  const handleYesButton = () => {
    if (userDoor === winningDoor) {
      setGameResult(previousResult => previousResult);
    } else {
      setGameResult(previousResult => !previousResult);
    }
    setGameStage(gameStage+1);
  }
  const handleNoButton = () => {
    if (userDoor === winningDoor) {
      setGameResult(previousResult => !previousResult);
    } else {
      setGameResult(previousResult => previousResult);
    }
    setGameStage(gameStage+1);
  }
    return (
      <div className="App">
        <NavBar/>
        <Description/>
        <GameRules userDoor = {userDoor}/>
        <GameField handleUserDoor= {handleUserDoor} userDoor={userDoor} gameStage = {gameStage} winningDoor= {winningDoor} handleYesButton = {handleYesButton} handleNoButton = {handleNoButton} gameResult = {gameResult}/>
        <Footer/>
      </div>
    );
  }


export default App;
