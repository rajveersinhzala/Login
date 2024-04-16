import React from 'react'
import { Grid, FormControl, FormLabel, RadioGroup, FormControlLabel, Radio } from '@mui/material';
import TextField from '@mui/material/TextField';
import './create-account.css'
import { useNavigate } from 'react-router-dom';




function Signup() {
const navigate = useNavigate();
const handleSetting =()=>{
  navigate('/settings')
  }
  return (
    <>
      <Grid className='signup-container'>
        <h1 className='head'>Create your <br /> PopX account</h1>

        <div className='form'>
        <TextField variant="outlined" label="Full Name" style={{width:'350px',borderRadius:'5px',marginBottom:'25px'}}/>
        <TextField variant="outlined" label="Phone number" style={{width:'350px',marginBottom:'25px'}}/>
        <TextField variant="outlined" label="Email address" type="email" style={{width:'350px',marginBottom:'25px'}}/>
        <TextField variant="outlined" label="Password" type="password" style={{width:'350px',marginBottom:'25px'}}/>
        <TextField variant="outlined" label="Company name" style={{width:'350px',marginBottom:'25px'}}/>
        </div>

       
        <FormControl>
  <FormLabel id="demo-radio-buttons-group-label">Are you an Agency?</FormLabel>
  <RadioGroup
    aria-labelledby="demo-radio-buttons-group-label"
    defaultValue="Yes"
    name="radio-buttons-group"
    
  >
    <FormControlLabel value="Yes" control={<Radio />} label="Yes" /> 
    <FormControlLabel value="No" control={<Radio />} label="No" />
  </RadioGroup>
</FormControl>

<button onClick={handleSetting}>Create Account</button>


      </Grid>
    </>
  )
}

export default Signup
