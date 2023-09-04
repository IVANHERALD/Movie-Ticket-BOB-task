import React from 'react'
import QRCode from './qrcode';
import { useAuthValue } from '../AuthContext';

function ConfirmedBooking() {
const {currentUser,ChosenMovie}=useAuthValue();
  const {selectedSeats}=useAuthValue();
  const {selectedTime, setSelectedTime} = useAuthValue();
  const {theatreData, setTheatreData} = useAuthValue([]);
  const qrCodeData = JSON.stringify({
    currentUser,
    selectedTime,
    selectedSeats,
  });

  return (
    <div>
    <QRCode data={qrCodeData}/>
    </div>
  )
}

export default ConfirmedBooking