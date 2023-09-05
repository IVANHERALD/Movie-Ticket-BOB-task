import { Button, InputAdornment, TextField } from '@mui/material'
import React,{useState,useEffect} from 'react'
import { useNavigate } from 'react-router-dom';

import './Styles/Bookingconfirmation.css';
import { useAuthValue } from '../AuthContext';
function Bookingconfirmation() {
  const history=useNavigate();
  const {currentUser,ChosenMovie}=useAuthValue();
  const {selectedSeats}=useAuthValue();
  const {selectedTime, setSelectedTime} = useAuthValue();
  const {theatreData, setTheatreData} = useAuthValue([]);
 
  const [email, setEmail] = useState(currentUser?.email || '');
  const [phonenumber, setphonenumber] = useState(null);
  const [displayName, setDisplayName] = useState(currentUser?.displayName || '');
  useEffect(() => {
    setDisplayName(currentUser?.displayName || '');
    setEmail(currentUser?.email || '');
  }, [currentUser]);
  const ConfirmBooking=async()=>{
    const bookingData={
      displayName,
      email,
    phonenumber,
    ChosenMovie,
     theatreLocation:theatreData[0].theatre_location,
     theatreName:theatreData[0].theatre_name,
     selectedTime,
     selectedSeats,
     numberOfSeats:selectedSeats.length,

    }
    history('/confirmBooking')
    console.log(currentUser.displayName,currentUser.email,phonenumber,ChosenMovie,theatreData[0].theatre_location,theatreData[0].theatre_name,selectedTime,selectedSeats,"number:",selectedSeats.length);
   /* fetch('/postBookingData', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(bookingData),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.success) {
          // Handle success, e.g., redirect to a confirmation page
          console.log('Data posted successfully:', data.message);
          // You can navigate to a confirmation page or perform any other action here
        } else {
          // Handle failure
          console.error('Failed to post data:', data.message);
        }
      })
      .catch((error) => {
        console.error('Error:', error);
      });*/
      
        try {
          const response = await fetch('/store-data', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(bookingData),
            
          });
    
          if (response.status === 201) {
            const data = await response.json();
            console.log('Data stored successfully. Document ID:', data.docId);
          } else {
            console.error('Failed to store data.');
          }
        } catch (error) {
          console.error('Error storing data:', error);
        }
      
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
