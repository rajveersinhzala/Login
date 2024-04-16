import React from 'react'
import { Grid } from '@mui/material';
import './accountsetting.css'
import image from '../assests/Ellipse 114@2x.png'
import img from '../assests/Group 1585.png'

function Accountsetting() {
  return (
    <>
    <Grid>
        <div className='header'>
        <h1>Account Settings</h1>
        </div>
        <div className='main'>
            <img src={image} className='pic'/>
            <img src={img} className='img'/>
            <h3 className='name'>Marry Doe</h3>
            <h2>Marry@Gmail.Com</h2>
        </div>
        <div className='paragh'>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Distinctio quaerat officia necessitatibus quia ipsa iste, labore consequuntur voluptatum expedita   </p>
        </div>

--------------------------------------------------------------------
    </Grid>
      
    </>
  )
}

export default Accountsetting
