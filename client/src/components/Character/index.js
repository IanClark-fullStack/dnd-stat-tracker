import React from "react";
import { useQuery } from '@apollo/client';
import { QUERY_CHARACTERS } from '../../utils/queries';
import CharacterCard from '../CharacterCard'

function CharacterSheet() {

  const { data } = useQuery(QUERY_CHARACTERS);

  console.log(data)

  return (
    <div className="">
      <div className="">
        {(data !== undefined) && data.characters.map((character) => (
          <CharacterCard
            key={character._id}
            _id={character._id}
            level={character.level}
            name={character.name}
            characterStats={character.characterStats.Stat}
            abilityScores={character.abilityScores.Ability}
            class={character.class.Class}
          />
          ))}
      </div>
      
    </div>
  )
}

export default CharacterSheet;