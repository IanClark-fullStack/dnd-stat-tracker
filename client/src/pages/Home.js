import * as React from 'react';
import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import './Home.css';


export default function Home() {
    return (
        <div className='test1'>
            <h1>DND - Stat Tracker</h1>
            <p>Please login to see stats or register!</p>
            <Stack direction="row" spacing={2} justifyContent="center">
                <Button variant="outlined" component={Link} to="/login">Login</Button>
                <Button variant="outlined" component={Link} to="/signup">Sign Up</Button>
            </Stack>
        </div >
    )
}
