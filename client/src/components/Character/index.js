import React from "react";
import { useQuery } from '@apollo/client';
import { QUERY_CHARACTERS } from '../../utils/queries';
import CharacterCard from '../CharacterCard'

function CharacterSheet() {

  const { data } = useQuery(QUERY_CHARACTERS);

  return (
    <div className="">
      <p>{data.name}'s stat sheet</p>
      <div className=''>
        {data.map((character) => (
          <CharacterCard
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