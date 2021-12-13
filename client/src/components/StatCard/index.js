import React from "react";
// import { useStoreContext } from '../../utils/GlobalState';
// import { UPDATE_STAT } from "../../utils/actions";

// const { io } = require("socket.io-client");
// const socket = io();

function StatCard(statInfo) {
  // const [state, dispatch] = useStoreContext();

  const {
    // _id,
    initiative,
    HP,
    speed,
    hitDice,
    armor,
    proficiency
  } = statInfo

  // const { character } = state;

  // const statChange = () => {
  //   const statForCharacter = character.find((charStat) => charStat._id === _id)
  //   socket.emit('stat change', statForCharacter);
  //   socket.on('stat change', function(statForCharacter) {
  //     dispatch({
  //       type: UPDATE_STAT,
  //       _id: _id,
  //       statValue: parseInt(statForCharacter.statValue) 
  //     })
  //   })
  // }
  
  return (
    <div className="">
      <div>Initiative: {initiative}</div>
      <div>HP: {HP}</div>
      <div>Speed: {speed}</div>
      <div>HitDice: {hitDice}</div>
      <div>Armor: {armor}</div>
      <div>Proficiency: {proficiency}</div>
    </div>
    // <div className="">
    //   {Object.keys(statInfo).map((stat, i) => { 
    //     if (i !== 0) {
    //       return (
    //         <div>
    //           <p>{stat}:</p>
    //           <div>
    //             <button onClick={statChange}>-</button>
    //             <div>0</div> {/* Need to add in how to get the stat value.*/}
    //             <button onClick={statChange}>+</button>
    //           </div>
    //         </div>
    //   )}
    //   else return null;
    // })
    //   }
    // </div>
  )
}

export default StatCard;