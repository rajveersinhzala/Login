import React from 'react'
import { Grid } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import TextField from '@mui/material/TextField';
import './login.css'

function Login() {
  const navigate = useNavigate();
  const handleSetting =()=>{
    navigate('/settings')
  }

  return (
    <>
      <Grid className='login-container'>
        <h1 className='head'>Signing to your PopX account</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, </p>
        <div>
        <TextField className='email' variant="outlined" label="Email Address" type="email " />
        <TextField className='pass' variant="outlined" label="Password" type="Password" />
        </div>
        <button className='btn' onClick={handleSetting}>Login</button>
      </Grid>
    </>
  )
}

export default Login
