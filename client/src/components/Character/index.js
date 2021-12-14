import React from "react";
import { useQuery } from '@apollo/client';
import { QUERY_CHARACTERS } from '../../utils/queries';
import CharacterCard from '../CharacterCard'
import Box from '@mui/material/Box';
import './styles.css';



function CharacterSheet() {

  const { data } = useQuery(QUERY_CHARACTERS);

  console.log(data)

    // <CharacterCard
    //   key={index}
    //   _id={character._id}
    //   level={character.level}
    //   name={character.name}
    //   characterStats={character.characterStats}
    //   abilityScores={character.abilityScores.Ability}
    //   class={character.class}
    // />
  return (
    <div className="">
      <div className="">
        {(data !== undefined) && data.characters.map((character, index) => {
          return (
          <div className='character-container'>
            <div id='user-info-container' style={{ width: '50%' }}>
                    <Box sx={{ display: 'flex', p: 1, m: 1, bgcolor: 'background.paper', flexDirection: 'column' }}>
                        <Box sx={{ flexDirection: 'row' }}>
                            <h3 className='mono'>{character.name}</h3>
                        </Box>
                      
                            <Box sx={{ flexDirection: 'row'}}>
                                <ul className='dinline'>
                                    <li key={index}>{`the ${character.class.name}`}</li>
                                    <li>Level - {character.level}</li>
                                    <li>{`HP ${character.HP}`}</li>
                                </ul>
                            </Box>
                      
                    </Box>
            </div>
            <div> 
                  <Box sx={{ display: 'inline-flex', p: 1, m: 1, bgcolor: 'background.paper' }}>
                    <CharacterCard characterProp={character} />
                  
                  </Box>
            
          </div>
      </div>
      )
      }
    )}
    </div>
  </div>
  )
}

export default CharacterSheet;