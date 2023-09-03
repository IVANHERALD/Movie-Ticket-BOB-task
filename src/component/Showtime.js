import React from 'react'
import { Button } from '@mui/material'
import './Styles/Showtime.css'
function Showtime() {
  return (
    <div className='Showtime-Buttons'>
        <Button variant='outlined' sx={{color:'white',borderColor:'#FFFF'}}>10:00 AM<br/>
        EPIQ</Button>
    <Button variant='outlined' sx={{color:'white',borderColor:'#FFFF'}}>02:00 PM</Button><br></br>
    <Button variant='outlined' sx={{color:'white',borderColor:'#FFFF'}}>06:00 PM<br/>DOLBY</Button>
    <Button variant='outlined' sx={{color:'white',borderColor:'#FFFF'}}>10:00 PM</Button>
    </div>
  )
}

export default Showtime