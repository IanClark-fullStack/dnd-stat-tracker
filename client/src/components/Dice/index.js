import React, { useState } from 'react';







export default function Dice() {
    const dieChoices = ['d4', 'd6', 'd8', 'd10', 'd12', 'd20'];
    let previousRolls = []; 
    let output = 0;
    const [diceValue, setDiceValue] = useState('');
    const rollEm = (choice) => setDiceValue(choice); 
    // const diceRoll = async (dieChoice) => {
            switch (diceValue) {
                case "d4":
                    output = Math.floor(Math.random() * 4) + 1
                    previousRolls.push(output);
                    break;
                case "d6":
                    output = Math.floor(Math.random() * 6) + 1
                    console.log(output);
                    previousRolls.push(output);
                    break;
                case "d8":
                    output = Math.floor(Math.random() * 8) + 1
                    previousRolls.push(output);
                    break;
                case "d10":
                    output = Math.floor(Math.random() * 10) + 1
                    previousRolls.push(output);
                    break;
                case "d12":
                    output = Math.floor(Math.random() * 12) + 1
                    previousRolls.push(output);
                    break;
                case "d20":
                    output = Math.floor(Math.random() * 20) + 1
                    previousRolls.push(output);
                    break;
                default:
                    output = 0;
                }
                
    
            
    // }


        // const changeDice = (num) => setDiceValue(num);




        // switch (diceValue) {
        //     case "d4":
        //         return Math.floor(Math.random() * 4) + 1

        //     case "d6":
        //         return Math.floor(Math.random() * 6) + 1

        //     case "d8":
        //         return Math.floor(Math.random() * 8) + 1

        //     case "d10":
        //         return Math.floor(Math.random() * 10) + 1

        //     case "d12":
        //         return Math.floor(Math.random() * 12) + 1

        //     case "d20":
        //         return Math.floor(Math.random() * 20) + 1

        //     default:
        //         return 0
        // }

    
    return (
        <div>
            {dieChoices.map((choice) => {
               return (
               <> 
               <button type="Roll" id={choice} onClick={() => rollEm(`${choice}`)}>
                   {`Roll ${choice}`}</button>
                </>
               )
            })}
            {/* <button type="Roll" id="d4" value="d4" onClick={diceRoll(this.value)}>Roll d4</button>
            <button type="Roll" id="d6" value="d6" onClick={diceRoll(this.value)}>Roll d6</button>
            <button type="Roll" id="d8" value="d8" onClick={diceRoll(this.value)}>Roll d8</button> */}
            {/* <button type="Roll" id="d10" value="d10" onClick={diceRoll(`${this.value}`)}>Roll d10</button>
            <button type="Roll" id="d12" value="random number" onClick={diceRoll}>Roll d12</button>
            <button type="Roll" id="d20" value="random number" onClick={diceRoll}>Roll d20</button> */}
            {previousRolls.length ?( <div>{previousRolls[1]}</div> ) : ( <div>No dice rolled</div> ) }
        </div>
    )
}
