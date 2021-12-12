import React, { useState } from 'react';







export default function Dice() {
    
    // const [previousRolls, setPreviousRolls] = useState([]); 
    const [output, setOutput] = useState(0);
   
    const [diceValue, setDiceValue] = useState('');
    const dieChoices = ['d4', 'd6', 'd8', 'd10', 'd12', 'd20'];
    let rollTotal = 0
    const rollEm = (choice) => {
        setDiceValue('')
        setDiceValue(choice);
         
        
    }
 

    // const diceRoll = async (dieChoice) => {
            // switch (diceValue) {
            //     case "d4":
            //         output = Math.floor(Math.random() * 4) + 1
            //         setPreviousRolls([...previousRolls, output]);
            //         break;
            //     case "d6":
            //         output = Math.floor(Math.random() * 6) + 1
            //         console.log(output);
            //         setPreviousRolls([...previousRolls, output]);
            //         break;
            //     case "d8":
            //         output = Math.floor(Math.random() * 8) + 1
            //         setPreviousRolls([...previousRolls, output]);
            //         break;
            //     case "d10":
            //         output = Math.floor(Math.random() * 10) + 1;
            //         setPreviousRolls([...previousRolls, output]);
            //         break;
            //     case "d12":
            //         output = Math.floor(Math.random() * 12) + 1;
            //         setPreviousRolls([...previousRolls, output]);
            //         break;
            //     case "d20":
            //         output = Math.floor(Math.random() * 20) + 1
            //         setPreviousRolls([...previousRolls, output]);
            //         break;
            //     default:
            //         output = 0;
            //     }

                

    
            
            switch (diceValue) {
                
                case "d4":
                    rollTotal = Math.floor(Math.random() * 4) + 1;
                    
                    setOutput(rollTotal);
                    // setDiceValue('');
                    // setPreviousRolls([...previousRolls, output]);
                    break;
                case "d6":
                    rollTotal = Math.floor(Math.random() * 6) + 1;
                    
                    break;
                case "d8":
                    rollTotal = Math.floor(Math.random() * 8) + 1;
                    break;
                case "d10":
                    rollTotal = Math.floor(Math.random() * 10) + 1;
                    break;
                case "d12":
                    rollTotal = Math.floor(Math.random() * 12) + 1;
                    break;
                case "d20":
                    rollTotal = Math.floor(Math.random() * 20) + 1;
                    break;
                default:
                    rollTotal = 0;
            }    
          
            // setOutput(rollTotal);
            
    
            
            // diceRoll(diceValue);
    
    return (
        <div>
            {dieChoices.map((choice) => {
                return (
                    <> 
                        <button 
                            type="Roll"
                            key={choice} 
                            id={choice} 
                            onClick={() => rollEm(`${choice}`)}>
                                {`Roll ${choice}`}
                        </button>
                    </>
                )
            })}
            <h2>{output}</h2>
        </div>
    )
}
