import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import './User.css';
import CharacterList from '../components/CharacterList'

export default function User() {
    return (
        <div className='test4'>
            <h1>User page here</h1>
            <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                >
                    <Typography>
                        <CharacterList />
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        Sleight of Hand --- 4
                        Acrobatics --- 6
                        Stealth --- 9
                    </Typography>
                </AccordionDetails>
            </Accordion>
            {/* <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel2a-content"
                    id="panel2a-header"
                >
                    <Typography>STRENGTH+</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        Sleight of Hand --- 3
                        Acrobatics --- 8
                        Stealth --- 2
                    </Typography>
                </AccordionDetails>
            </Accordion> */}
        </div>
    )
}
