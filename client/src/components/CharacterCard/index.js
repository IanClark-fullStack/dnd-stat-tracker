import React from "react";
import AbilityCard from '../AbilityCard';
import StatCard from '../StatCard';
import { useQuery } from '@apollo/client';
import { QUERY_ABILITIES, QUERY_STATS } from '../../utils/queries';

function CharacterCard(charInfo) {
  // const [state, dispatch] = useStoreContext();

  const { data:abilityData } = useQuery(QUERY_ABILITIES);
  const { data:statData } = useQuery(QUERY_STATS);

  console.log(abilityData);
  console.log(statData)

  const {
    // _id,
    name,
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
      <p>{name}</p>
      <p>{level}</p>
      <div>
        <div>
          {(abilityData !== undefined) && abilityData.abilities.map((ability) => (
            <AbilityCard
            character={ability.character}
            desc={ability.desc}
            shortName={ability.shortName}
            fullName={ability.fullName}
            scoreTotal={ability.scoreTotal}
            modifier={ability.modifier}
            savingThrow={ability.savingThrow}
            skills={ability.skills.Skill}
            />
            ))}
        </div>
      </div>
      <div>
        {(statData !== undefined) && statData.stats.map((stat) => (
          <StatCard 
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