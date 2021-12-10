import React from 'react';
import CharacterSheet from '../Character'
import { useQuery } from '@apollo/client';
import { QUERY_USERS } from '../../utils/queries'

function CharacterList() {

  const { data } = useQuery(QUERY_USERS)

  return (
  <div className="">
    <h2>All Characters:</h2>
    <div className="">
      {data.map((user) => (
      <CharacterSheet
        key={user._id}
        email={user.email}
        password={user.email}
        username={user.username}
      />
      ))}
    </div>
  </div>
  );
}

export default CharacterList;