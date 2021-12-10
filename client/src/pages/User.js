import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import './User.css';

export default function User() {
    return (
        <div className='test4'>
            <h1>User page here</h1>
            <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header">
                    <Typography>Dexterity</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        Acrobatics   --- 4
                        sleightOfHand --- 6
                        Stealth --- 9
                        Dexterity Total --- 19
                    </Typography>
                </AccordionDetails>
            </Accordion>

            <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel2a-content"
                    id="panel2a-header">
                    <Typography>Strength</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        Athletics --- 3
                        Strength Total --- 3
                    </Typography>
                </AccordionDetails>
            </Accordion>
            
            <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header">
                    <Typography>Wisdom</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        Animal Handling   --- 1
                        insight --- 6
                        Medicine --- 9
                        Perception --- 4
                        Survival --- 5
                        Wisdom Total --- 25
                    </Typography>
                </AccordionDetails>
            </Accordion>
            
            <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel2a-content"
                    id="panel2a-header">
                    <Typography>Charisma</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        Deception --- 3
                        Intimidation --- 3
                        Performance --- 1
                        Persuasion --- 1
                        Charisma Total --- 8
                    </Typography>
                </AccordionDetails>
            </Accordion>
            
            <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel2a-content"
                    id="panel2a-header">
                    <Typography>Intelligence</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        Arcana --- 3
                        History --- 3
                        Investigation --- 1
                        Nature --- 1
                        Religion --- 8
                        Intelligence Total --- 16
                    </Typography>
                </AccordionDetails>
            </Accordion>
            
            <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel2a-content"
                    id="panel2a-header">
                    <Typography>Constitution</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        Constitution Total --- 16
                    </Typography>
                </AccordionDetails>
            </Accordion>
        </div>
    )
}
