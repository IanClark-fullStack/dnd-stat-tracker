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
      <div>Ability name: {fullName}</div>
      <div>Ability score total: {scoreTotal}</div>
      <div>Ability modifier: {modifier}</div>
      <div>Ability saving throw: {savingThrow}</div>
      <div>Ability skills: {skills}</div>
    </div>
  )
}

export default AbilityCard;