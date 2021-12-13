import React from "react";

function AbilityCard(abilityInfo) {

  const {
    // _id,
    fullName,
    scoreTotal,
    modifier,
    savingThrow,
    skills
  } = abilityInfo

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
      <div>{fullName}</div>
      <div>{scoreTotal}</div>
      <div>{modifier}</div>
      <div>{savingThrow}</div>
      <div>{skills}</div>
    </div>
  )
}

export default AbilityCard;