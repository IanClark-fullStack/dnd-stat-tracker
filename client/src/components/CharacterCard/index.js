import React from "react";
import AbilityCard from '../AbilityCard';
import StatCard from '../StatCard';
import { useQuery } from '@apollo/client';
import { QUERY_ABILITIES, QUERY_STATS } from '../../utils/queries';

function CharacterCard(charInfo) {
  // const [state, dispatch] = useStoreContext();

  const { abilityData } = useQuery(QUERY_ABILITIES);
  const { statData } = useQuery(QUERY_STATS);


  const {
    // _id,
    level
  } = charInfo;

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
      <p>{level}</p>
      <div>
        {abilityData.map((ability) => (
          <AbilityCard
          key={ability._id}
          _id={ability._id}
          shortName={ability.shortName}
          fullName={ability.fullName}
          scoreTotal={ability.scoreTotal}
          modifier={ability.modifier}
          savingThrow={ability.savingThrow}
          skills={ability.skills}
          />
        ))}
      </div>
      <div>
        {statData.map((stat) => (
          <StatCard 
          key={stat._id}
          _id={stat._id}
          initiative={stat.initiative}
          HP={stat.HP}
          speed={stat.speed}
          hitDice={stat.hitDice}
          armor={stat.armor}
          proficiency={stat.proficiency}
          />
        ))}
      </div>
    </div>
  )

  // return (
  //   <div className="">
  //     {Object.keys(charInfo).map((stat, i) => { 
  //       if (i !== 0) {
  //         return (
  //           <div>
  //             <p>{stat}:</p>
  //             <div>
  //               <button onClick={statChange}>-</button>
  //               <div>0</div> {/* Need to add in how to get the stat value.*/}
  //               <button onClick={statChange}>+</button>
  //             </div>
  //           </div>
  //     )}
  //     else return null;
  //   })
  //     }
  //   </div>
  // )
}

export default CharacterCard;