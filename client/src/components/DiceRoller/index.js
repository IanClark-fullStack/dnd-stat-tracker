import { useState } from 'react';
// const { io } = require("socket.io-client");
// const socket = io();

export default function DiceRoller() {  
    const [diceValue, setDiceValue] = useState({result: 0, dice: [4, 6, 8, 10, 20]});
    const [output, setOutput] = useState(1);
    const [rollsLog, setRollsLog] = useState([]); 
    
    const calculateTotal = (event) => {
        event.preventDefault();
        let num = event.target.name;
        // console.log(num)
        let rando = () => {
            return Math.floor(Math.random() * num) + 1
        }
        
        setDiceValue({...diceValue, result: rando()});
        let newNum = diceValue.result; 
        // log.length < 5 ? log.push(newNum) : log.shift(); 
        // socket.emit('dice roll', (newNum));
        // console.log(log);
        setRollsLog([...rollsLog, newNum]); 
        // console.log(rollsLog);
        setOutput(newNum);
        // console.log(output)
        // socket.on('dice roll', function(newNum) {
        //     console.log(newNum)
        //     setRollsLog([...rollsLog, newNum]);
        //     setOutput(newNum);
        // })
    }
    // const handleChange = (event) => {
    //     let newOutput = event.target.value;
    //     console.log(newOutput);
        
    //     setOutput(newOutput);
        
        
    // }


    return (
        <div>
            <h5> Make your move </h5>
            {diceValue.dice.map((el, index)=> {
                return (
                    <>
                    <button key={index} name={el} onClick={calculateTotal}>{`Roll ${el}`}</button>
                    </>
                )
            })}
            <h2 name={1}>{output}</h2>
            {rollsLog.length < 6 ? (
                <ul>
                    {rollsLog.map((num, index) => {
                        return (
                            <li key={index}>{num}</li>
                        )
                    })}
                </ul>
            ) : (
                <ul>
                    {rollsLog.shift()}
                    {rollsLog.map((num, index) => {
                        return (
                            <li key={index}>{num}</li>
                        )
                    })}
                </ul>
                
            
            )}
            
            
        </div>
    )

}

