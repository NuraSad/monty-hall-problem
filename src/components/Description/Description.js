import React from "react";
import './Description.css'

const Description = () => {
    return (
        <div className="descriptionText">
            The Monty Hall problem is a counter-intuitive statistics puzzle:
            There are 3 doors, behind which are two cats and a bag of gold.
            You pick a door. You’re hoping for the gold of course.
            Monty Hall, the game show host, examines the other doors and opens one with a cat.
            Here’s the game: Do you stick with door you choose first or switch to the unopened door?
        </div>
    )
}

export default Description