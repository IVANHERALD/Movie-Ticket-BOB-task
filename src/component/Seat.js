
import './Styles/Seat.css';
import React, { useState } from 'react'
import clsx from 'clsx'
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { Button } from '@mui/material';
const movies = [
  {
    name: 'Avenger',
    price: 10,
    occupied: [20, 21, 30, 1, 2, 8],
  },
  {
    name: 'Joker',
    price: 12,
    occupied: [9, 41, 35, 11, 65, 26],
  },
  {
    name: 'Toy story',
    price: 8,
    occupied: [37, 25, 44, 13, 2, 3],
  },
  {
    name: 'the lion king',
    price: 9,
    occupied: [10, 12, 50, 33, 28, 47],
  },
]

const seats = Array.from({ length: 11 * 15 }, (_, i) => i)

export default function App() {
  const history=useNavigate();
  const [selectedMovie, setSelectedMovie] = useState(movies[0])
  const [selectedSeats, setSelectedSeats] = useState([])
  const [selectedSeatLabels, setSelectedSeatLabels] = useState({});
  function handleSelectedState(seat) {
    const isSelected = selectedSeats.includes(seat);
    const row = Math.floor(seat / 15) + 1;
    const seatNumber = seat % 15 + 1;
    const seatLabel = String.fromCharCode(64 + row) + seatNumber;
    

    if (isSelected) {
      const updatedSelectedSeats = selectedSeats.filter(
        selectedSeat => selectedSeat !== seat
      );
      const updatedSeatLabels = { ...selectedSeatLabels };
      delete updatedSeatLabels[seat];

      setSelectedSeats(updatedSelectedSeats);
      setSelectedSeatLabels(updatedSeatLabels);
    } else {
      const updatedSelectedSeats = [...selectedSeats, seat];
      const updatedSeatLabels = {
        ...selectedSeatLabels,
        [seat]: seatLabel,
      };
      setSelectedSeats(updatedSelectedSeats);
      setSelectedSeatLabels(updatedSeatLabels);
    }
  }
  const displaySelectedSeatLabels = () => {
  console.log("Selected Seats:");
    for (const seatIndex in selectedSeatLabels) {
      console.log(`Seat at index ${seatIndex} has label: ${selectedSeatLabels[seatIndex]}`);
    }
    console.log(`Number of Seats Selected: ${selectedSeats.length}`);
    history('/Bookingpage')
  };
  return (
    <div className="App">
      
      <ShowCase />
      <Cinema
        movie={selectedMovie}
        selectedSeats={selectedSeats}
        onSelectedSeatsChange={selectedSeats => setSelectedSeats(selectedSeats)}
        handleSelectedState={handleSelectedState}
      />
       You have selected <span className="count">{selectedSeats.length}</span>{' '}
       <span><Button variant='outlined' onClick={displaySelectedSeatLabels}>Pay</Button></span>
     

     
    </div>
  )
}



function ShowCase() {
  return (
    <ul className="ShowCase">
      <li>
        <span className="seat" /> <small>N/A</small>
      </li>
      <li>
        <span className="seat selected" /> <small>Selected</small>
      </li>
      <li>
        <span className="seat occupied" /> <small>Occupied</small>
      </li>
    </ul>
  )
}

function Cinema({ movie, selectedSeats, onSelectedSeatsChange,handleSelectedState }) {
  function handleSelectedState(seat) {
    const isSelected = selectedSeats.includes(seat)
    if (isSelected) {
      onSelectedSeatsChange(
        selectedSeats.filter(selectedSeat => selectedSeat !== seat),
      )
    } else {
      onSelectedSeatsChange([...selectedSeats, seat])
    }
  }

  return (
    <div className="Cinema">
      <div className="screen" />

      <div className="seats">
        {seats.map(seat => {
          const isSelected = selectedSeats.includes(seat)
          const isOccupied = movie.occupied.includes(seat)
          const row = Math.floor(seat / 15) + 1; // Calculate row number
          const seatNumber = seat % 15 + 1; // Calculate seat number within the row
          const seatLabel = String.fromCharCode(64 + row) + seatNumber; 
          return (
            <span key={seat}>{seatLabel}
            <span
              tabIndex="0"
              
              className={clsx(
                'seat',
                isSelected && 'selected',
                isOccupied && 'occupied',
              )}
              onClick={isOccupied ? null : () => handleSelectedState(seat)}
              onKeyPress={
                isOccupied
                  ? null
                  : e => {
                      if (e.key === 'Enter') {
                        handleSelectedState(seat);
                      }
                    }
              }
            />
            </span>
              
           
          );
        })}
      </div>
    </div>
  )
}
