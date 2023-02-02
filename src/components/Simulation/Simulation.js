import React, {useState} from "react";
import Chart from 'react-apexcharts';


function Simulation () {
    const [numberOfGames, setNumberOfGames] = useState(1);
    const [winWithChangeSim, setWinWithChangeSim] = useState(0);
    const [winWithoutChangeSim, setWinWithoutChangeSim] = useState(0);

    const handleStartButton = () => {
        let woc = 0;
        let wc = 0;
        //loop for games without door change
        for(let i = 0; i < numberOfGames; i++){
            let winDoor = Math.floor(Math.random() * 3) + 1;
            let userDoor = Math.floor(Math.random() * 3) + 1;
            if (winDoor === userDoor){
                woc++;
            } else {
                continue;
            }
        }
        // with change
        for(let i = 0; i < numberOfGames; i++){
            let winDoor = Math.floor(Math.random() * 3) + 1;
            let userDoor = Math.floor(Math.random() * 3) + 1;
            if (winDoor !== userDoor){
                wc++;
            } else {
                continue;
            }
        }
        setWinWithChangeSim(wc);
        setWinWithoutChangeSim(woc);
    }


    const options = {
          chart: {
            type: 'donut',
          },
          labels: ['Win', 'Lose'],
          responsive: [{
            breakpoint: 480,
            options: {
              chart: {
                width: 200
              },
              legend: {
                position: 'bottom'
              }
            }
          }]
        };
    
    const seriesWithChange = [winWithChangeSim, numberOfGames-winWithChangeSim];
    const seriesWithoutChange = [winWithoutChangeSim, numberOfGames-winWithoutChangeSim];

    return (
        <div>
           <label>
                How many games to play:
                <input name="NumberOfGames" onChange={e => setNumberOfGames(e.target.value)}/>
                <button name="Start" type="submit" onClick ={() => handleStartButton()}>Start</button>
            </label>
            <Chart options={options} series={seriesWithChange} type="donut" />
            <p>Win with door change </p>
            <Chart options={options} series={seriesWithoutChange} type="donut" />
            <p>Win without door change </p>
        </div>)
}

export default Simulation;


// what i need in Simulation:
//input field of how many games to play
//play game: choose randow winning door, user door, to change door or not
//games played, won games, won games with door change/without
//bar chart that shows stats