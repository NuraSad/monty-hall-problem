import React from "react";
import Door from '../../Elements/Door/Door';
import Cat from '../../Elements/Cat/Cat';
import Gold from "../../Elements/Gold/Gold";
import MessageBar from "../../Elements/MessageBar/MessageBar";
import Button from "../../Elements/Button/Button";
import './GameField.css';

function openDoor(door1, door2) {
    let doorsArray = [1,2,3];
    if (door1 === door2) {
        doorsArray = doorsArray.filter(item => item !== door1)
    } else {
        doorsArray = doorsArray.filter(item => item !== door1)
        doorsArray = doorsArray.filter(item => item !== door2)
    }
    return doorsArray[0];
}

const GameField = ({handleUserDoor, userDoor, gameStage, winningDoor, handleYesButton, gameResult, handleNoButton}) => {

      switch (gameStage){
        case 1:
            return (
                <div className="gameField">
                    <div className="DoorField">
                        <Door id='1' onClick={handleUserDoor}/>
                    </div>
                    <div className="DoorField">
                         <Door id='2' onClick={handleUserDoor}/>
                    </div>
                    <div className="DoorField">
                        <Door id='3' onClick={handleUserDoor}/>
                    </div>
                </div>
            );
        case 2:
            let doorToOpen = openDoor(userDoor, winningDoor);
            return (
                <div className="gameField">
                    <div className="DoorField">
                        {doorToOpen === 1 ? <Cat/> : <Door/>}
                    </div>
                    <div className="DoorField">
                        {doorToOpen === 2 ? <Cat/> : <Door/>}
                    </div>
                    <div className="DoorField">
                        {doorToOpen === 3 ? <Cat/> : <Door/>}
                    </div>
                    <div className="TextField">
                        <MessageBar message = {doorToOpen} gameStage= {gameStage}/>
                    </div>
                    <div className="ButtonField">
                        <Button name="Yes" type="submit" onClick ={() => handleYesButton()}>
                           Yes
                         </Button>
                         <Button name="No" type="submit" onClick ={()=> handleNoButton()}>
                            No
                         </Button> 
                    </div>
                </div>
            )
        case 3:
            return (
                <div className="gameField">
                    <div className="DoorField">
                        {winningDoor === 1 ? <Gold/> : <Cat/>}
                    </div>
                    <div className="DoorField">
                        {winningDoor === 2 ? <Gold/> : <Cat/>}
                    </div>
                    <div className="DoorField">
                        {winningDoor === 3 ? <Gold/> : <Cat/>}
                    </div>
                    <div className="TextField">
                        <MessageBar gameStage= {gameStage} gameResult = {gameResult}/>
                    </div>
                </div>
            )
        default:
            return (
                <div>
                    <p>Something went wrong...</p>
                </div>
            );
        }
}
            

export default GameField