import * as React from 'react';
import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import './Home.css';


export default function Home() {
    return (
        <div className='test1'>
            <h1>DND - Stat Tracker</h1>
            <p>A website made to help people new to DnD get started and keep track of stats and dice rolls without needing all the physical equipment.</p>
            <Stack direction="row" spacing={2} justifyContent="center">
                <Button variant="outlined" component={Link} to="/login">Login</Button>
                <Button variant="outlined" component={Link} to="/signup">Sign Up</Button>
            </Stack>
        </div >
    )
}
