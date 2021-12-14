import React from "react";
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Box from '@mui/material/Box';

export default function SkillCard(skillProp) {
  console.log(skillProp)
  // const [state, dispatch] = useStoreContext();

  // const { data } = useQuery(QUERY_ABILITY)

  return (
    <div className=''>
      {skillProp.map((skill) => (
        <div className=''>
         
          <Accordion>
            <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header">
                    <h6>
                      {`${skill.name} Total: ${skill.scoreTotal}`}
                    </h6> 
            </AccordionSummary>

        <AccordionDetails>
          <Box sx={{ display: 'flex', p: 1, m: 1, flexDirection: 'column' }}>
            {/* {skill.desc.map((line) => 
              <p>{line}</p>
            )} */}
  
          </Box>
          
        </AccordionDetails>

      </Accordion>

        </div>
      ))}
    </div>
  )
}