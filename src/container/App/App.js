import React, { useState} from 'react';
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
  const [games, setGameCount] = useState(0);
  const [winWithChange, setWinWithChange] = useState(0)
  const [winWithoutChange, setWinWithoutChange] = useState(0)
  // const [changedDoor, setChangeDoor] = useState(false)

  const handleUserDoor = (door) => {
      setUserDoor(parseInt(door.currentTarget.id));
      setGameStage(gameStage+1);
  }
  const handleYesButton = () => {
    setGameCount(games+1);
    if (userDoor === winningDoor) {
      setGameResult(previousResult => previousResult);
    } else {
      setGameResult(previousResult => !previousResult);
      setWinWithChange(winWithChange+1);
    }
    setGameStage(gameStage+1);
  }
  const handleNoButton = () => {
    setGameCount(games+1);
    if (userDoor === winningDoor) {
      setGameResult(previousResult => !previousResult);
      setWinWithoutChange(winWithoutChange+1);
    } else {
      setGameResult(previousResult => previousResult);
    }
    setGameStage(gameStage+1);
  }
  const handleGameRestart = () => {
    let winDoor = Math.floor(Math.random() * 3) + 1;
    setWinningDoor(winDoor);
    setGameStage(1);
    setUserDoor(0);
    setGameResult(false);
  }
    return (
      <div className="App">
        <NavBar/>
        <Description/>
        <GameRules userDoor = {userDoor} games={games} winWithChange = {winWithChange} winWithoutChange = {winWithoutChange}/>
        <GameField handleUserDoor= {handleUserDoor} userDoor={userDoor} gameStage = {gameStage} winningDoor= {winningDoor} handleYesButton = {handleYesButton} handleNoButton = {handleNoButton} gameResult = {gameResult} handleGameRestart={handleGameRestart}/>
        <Footer/>
      </div>
    );
  }


export default App;
