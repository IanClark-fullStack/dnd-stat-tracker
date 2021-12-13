import React from "react";
import { useQuery } from '@apollo/client';
import { QUERY_CHARACTERS } from '../../utils/queries';
import CharacterCard from '../CharacterCard'
import Box from '@mui/material/Box';
import './styles.css';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
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
        
        <div key={index} id='user-info-container' style={{ width: '50%' }}>
                <Box sx={{ display: 'flex', p: 1, m: 1, bgcolor: 'background.paper', }}>
                    <Box sx={{ flexDirection: 'column' }}>
                        <h3 className='mono'>{character.name}</h3>
                    </Box>
                    <Box sx={{ flexDirection: 'column' }}>    
                        <Box sx={{ justifyContent: 'space-evenly' }}>
                            <ul>
                                <li key={index}>{character.class.name}</li>
                                <li>{"HP"}</li>
                                <li>{character.level}</li>
                            </ul>
                        </Box>
                    </Box>
                </Box>
                <Box sx={{ display: 'inline-flex', p: 1, m: 1, bgcolor: 'background.paper' }}>
                <Accordion>
                  <AccordionSummary
                      expandIcon={<ExpandMoreIcon />}
                      aria-controls="panel1a-content"
                      id="panel1a-header">
                          {`Primary Skill - ${character.abilityScores.fullName}`} 
                  </AccordionSummary>
                  <AccordionDetails>
             
                          Acrobatics   --- 4
                          sleightOfHand --- 6
                          Stealth --- 9
         
                  </AccordionDetails>
              </Accordion>
                </Box>
          </div>
      
      )
      }
    )}
    </div>
  </div>
       
  )
}

export default CharacterSheet;