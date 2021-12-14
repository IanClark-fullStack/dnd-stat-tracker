import React from "react";
import AbilityCard from '../AbilityCard';
import SkillCard from '../SkillCard';
import StatCard from '../StatCard';

// import './styles.css';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Box from '@mui/material/Box';

export default function ClassCard({classProp}) {
    const [expanded, setExpanded] = React.useState(false);

    const handleChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    };

    return (
    <Accordion sx={{ width: '100%', margin: '0px'}} expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
        <AccordionSummary
        sx={{borderBottom: '1px solid #000'}}
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2bh-content"
            id="panel2bh-header"
        >
            <Typography sx={{ width: '33%', flexShrink: 0, fontWeight: '900' }}>
            {`Class`}
            </Typography>
            <Typography sx={{ color: 'text.secondary', marginLeft: '4px' }}>      
            {`${classProp.name}`}
            </Typography>
        </AccordionSummary>

        <AccordionDetails sx={{marginBottom: '0px'}}>
         
            <Box sx={{ display: 'flex', width: '100%', flexDirection: 'column' }}>
            <h5 className='smFont'>{`type: ${classProp.name}`}</h5>
            <ul className='scoreSet'>
                <li>Roll to Hit:
                <span className='characterNums'>d{classProp.hitDie}</span>
                </li>
                <li>saving throws
                {classProp.savingThrows.map((el, index) => {
                    return (
                        <p className='characterNums' key={index}>{el}</p>
                    )
                })}
                </li>
                
                {/* <SkillCard skillProp={abilityProp.skills} /> */}
                
            </ul>
            </Box>
        </AccordionDetails>
        </Accordion>

    )
}