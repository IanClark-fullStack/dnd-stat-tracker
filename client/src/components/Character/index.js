import React from "react";
import { useQuery } from '@apollo/client';
import { QUERY_CHARACTERS } from '../../utils/queries';
import StatCard from '../StatCard'

function CharacterSheet(userInfo) {

  const { data } = useQuery(QUERY_CHARACTERS);

  const { username } = userInfo

  return (
    <div className="">
      <p>{username}'s stat sheet</p>
      <div className=''>
        {data.map((character) => (
          <StatCard
            key={character._id}
            _id={character._id}
            level={character.level}
            name={character.name}
            characterStats={character.characterStats}
            abilityScores={character.abilityScores}
            // class
          />
          ))}
      </div>
    </div>
  )
}

export default CharacterSheet;