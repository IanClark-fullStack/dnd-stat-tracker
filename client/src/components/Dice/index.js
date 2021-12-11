import React, { useState } from 'react';





export default function Dice() {
    const diceRoll = async (event) => {
        // event.preventDefault()
        const [diceValue, setDiceValue] = useState('')


        const changeDice = (num) => setDiceValue(num)




        switch (diceValue) {
            case "d4":
                return Math.floor(Math.random() * 4) + 1

            case "d6":
                return Math.floor(Math.random() * 6) + 1

            case "d8":
                return Math.floor(Math.random() * 8) + 1

            case "d10":
                return Math.floor(Math.random() * 10) + 1

            case "d12":
                return Math.floor(Math.random() * 12) + 1

            case "d20":
                return Math.floor(Math.random() * 20) + 1

            default:
                return 0
        }

    }
    return (
        <div>
            <button type="Roll" id="d4" value="random number" onClick={changeDice}>Roll d4</button>
            <button type="Roll" id="d6" value="random number" onClick={diceRoll}>Roll d6</button>
            <button type="Roll" id="d8" value="random number" onClick={diceRoll}>Roll d8</button>
            <button type="Roll" id="d10" value="random number" onClick={diceRoll}>Roll d10</button>
            <button type="Roll" id="d12" value="random number" onClick={diceRoll}>Roll d12</button>
            <button type="Roll" id="d20" value="random number" onClick={diceRoll}>Roll d20</button>
            <div>{diceValue}</div>
        </div>
    )
}
