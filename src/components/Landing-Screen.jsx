import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Grid } from '@mui/material';
import './landing.css'

function LandingScreen() {
    const navigate = useNavigate();

    const handleLogin =()=>{
      navigate('/login')
    }
  
    const handleCreateAccountClick = () => {
      navigate('/create-account');
    };

    return (
        <>
            <Grid className='container'>
                <h1 className='heading' style={{font: 'normal normal medium 28px/17px Rubik'}}>Welcome to PopX</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit,</p>
                <button className='ca' onClick={handleCreateAccountClick}>Create Account</button><br />
                <button className='log' onClick={handleLogin}>Already Registered?Login</button>
            </Grid>
        </>
    );
}

export default LandingScreen;
