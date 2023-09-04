import { Button, InputAdornment, TextField } from '@mui/material'
import React,{useState,useEffect} from 'react'

import './Styles/Bookingconfirmation.css';
import { useAuthValue } from '../AuthContext';
function Bookingconfirmation() {
  const {currentUser}=useAuthValue();
  const [email, setEmail] = useState(currentUser?.email || '');
  const [phonenumber, setphonenumber] = useState(currentUser?.email || '');
  const [displayName, setDisplayName] = useState(currentUser?.displayName || '');
  useEffect(() => {
    setDisplayName(currentUser?.displayName || '');
    setEmail(currentUser?.email || '');
  }, [currentUser]);
  const ConfirmBooking=()=>{
    console.log(currentUser.displayName,currentUser.email,phonenumber);
  }
  return (
    <div className='Contact_details'>
        <div className='header'>
            Share your Contact Details
        </div><div className='input_container'>
        <TextField variant='outlined' label="Name" sx={{width:"300px"}} value={displayName} onChange={(e)=>setDisplayName(e.target.value)}/><br/><br/>
            <TextField variant='outlined' label="Email Address" sx={{width:"300px"}} value={email} onChange={(e)=>setEmail(e.target.value)}/><br/><br/>
            <TextField variant='outlined' InputProps={{startAdornment:<InputAdornment position='start'>+91</InputAdornment>}} sx={{width:"300px"}}value={phonenumber} onChange={(e)=>setphonenumber(e.target.value)}/><br/><br/>
            <div className='Button'><Button variant='outlined' sx={{borderRadius:"5px"}} onClick={ConfirmBooking}>CONTINUE</Button></div>
            </div>
        </div>


  )
}

export default Bookingconfirmation