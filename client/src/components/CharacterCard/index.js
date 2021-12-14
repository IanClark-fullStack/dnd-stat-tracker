import React from "react";
import AbilityCard from '../AbilityCard';
import SkillCard from '../SkillCard';
import StatCard from '../StatCard';
import ClassCard from '../ClassCard';
import { useQuery } from '@apollo/client';
import './styles.css';
import { QUERY_ABILITIES, QUERY_STATS } from '../../utils/queries';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Box from '@mui/material/Box';

function CharacterCard({characterProp}) {
  const [expanded, setExpanded] = React.useState(false);
  const abilityProp = characterProp.abilityScores; 
  


  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };





  // const [state, dispatch] = useStoreContext();

  // const { data:abilityData } = useQuery(QUERY_ABILITIES);
  // const { data:statData } = useQuery(QUERY_STATS);

  // console.log(abilityData);
  // console.log(statData)

  // const {
  //   // _id,
  //   name,
  //   level
  // } = charInfo;

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
    
    <div className="justifyCon">
      <Accordion sx={{ width: '100%'}} expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
        <AccordionSummary
        sx={{borderBottom: '1px solid #000'}}
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
        >
          <Typography sx={{ width: '33%', flexShrink: 0, fontWeight: '900' }}>
            {`${abilityProp.shortName}`}
          </Typography>
          <Typography sx={{ color: 'text.secondary', marginLeft: '4px' }}>      
            {`Level ${abilityProp.scoreTotal}`}
          </Typography>
        </AccordionSummary>
        
        <AccordionDetails>
          <Typography>
          <Box sx={{ display: 'flex', bordeBottom: '1px solid #000', width: '100%', flexDirection: 'column' }}>
            <h5 className='smFont'>{`${abilityProp.fullName}`}</h5>
            <ul className='scoreSet'>
              <li>modifier
                <span className='characterNums1'>{abilityProp.modifier}</span>
              </li>
              <li>saving throw
                <span className='characterNums1'>{abilityProp.modifier}</span>
              </li>
              
              {/* <SkillCard skillProp={abilityProp.skills} /> */}
              <li>
                <span className='characterNums1'>{abilityProp.modifier}</span>
              </li>
            </ul>
          </Box>
          </Typography>
        </AccordionDetails>
      </Accordion>
      <ClassCard classProp={characterProp.class} />

      <      
      {/* <Accordion>
        <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header">
                 
        </AccordionSummary>

        <AccordionDetails>
          
          
        </AccordionDetails>

      </Accordion> */}
          {/* {(abilityData !== undefined) && abilityData.abilities.map((ability) => (
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
            ))} */}
        </div>
     
    //   <div>
    //     {(statData !== undefined) && statData.stats.map((stat) => (
    //       <StatCard 
    //       initiative={stat.initiative}
    //       HP={stat.HP}
    //       speed={stat.speed}
    //       hitDice={stat.hitDice}
    //       armor={stat.armor}
    //       proficiency={stat.proficiency}
    //       />
    //     ))}
    //   </div>
    // </div>
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