import { useState } from 'react';
import './styles.css';
// const { io } = require('socket.io-client');
// CHANGE BEFORE DEPLOYMENT
// const socket = io('http://localhost:3001');
// const {io} = require('socket.io-client');
// const socket = io('http://localhost:3001');

export default function DiceRoller() {  
    const [diceValue, setDiceValue] = useState({result: 0, dice: [4, 6, 8, 10, 20]});
    const [rollsLog, setRollsLog] = useState([]); 
    
    // useEffect(() => {
    //     console.log('joining room');
    //     socket.emit('dice roll', {room: 'test-room'});
        
    // }, [])
    // useEffect(() => {
    //     socket.on( payload => {
    //         setMessageCount(messageCount + 1);
    //         document.title = `${messageCount} new messages have been emitted`;
    //     });
    //   }, []); //only re-run the effect if new message comes in
    
    
    const calculateTotal = (event) => {
        event.preventDefault();
        let dieChoice = event.target.name;
        // console.log(num)
        let rando = () => {
            return Math.floor(Math.random() * dieChoice) + 1
        }
        let result = rando();
        setDiceValue({...diceValue, result});
        let newNum = diceValue.result; 
        
        // log.length < 5 ? log.push(newNum) : log.shift(); 
        // console.log(log);
        setRollsLog([...rollsLog, result]); 
        console.log(rollsLog);
        
    }

    const handleChange = (event) => {
        let newOutput = event.target.name;
        console.log(newOutput);
        calculateTotal(newOutput);
    
        
        
    }


    return (
        <div>
            <h5> Make your move </h5>
            {diceValue.dice.map((el, index)=> {
                return (
                    <div className='seperate'>
                        <button className='easyButton' key={index} name={el} onClick={calculateTotal}>{`Roll ${el}`}</button>
                    </div>
                )
            })}
            <h2 className='rollTotal' name={diceValue.result}>{diceValue.result}</h2>
            {!rollsLog.length ? (
                <h6>Roll the dice</h6>
                ) : 
                
                rollsLog.length < 6 ? (
                    
                    <ul className='liBlock'>
                        {rollsLog.map((num, index) => {
                            return (
                                <li className='rollStyle' key={index}>{num}</li>
                            )
                        })}
                    </ul>
                ) : (
                    <ul className='liBlock'>
                        {rollsLog.shift()}
                        {rollsLog.map((num, index) => {
                            return (
                                <li className='rollStyle'  key={index}>{num}</li>
                            )
                        })}
                    </ul>
                    
                
                )}
            
            
            
            
            
            
        </div>
    )

        }
