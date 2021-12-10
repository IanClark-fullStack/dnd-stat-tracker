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
            constitution={character.constitution}
            dexterity={character.dexterity}
            strength={character.strength}
            wisdom={character.wisdom}
            charisma={character.charisma}
            intelligence={character.intelligence}
            // class
          />
          ))}
      </div>
    </div>
  )
}

export default CharacterSheet;