import React,{useState} from 'react'
import './Styles/MaxSeat.css';
import { Button } from '@mui/material';
import pop_tub from '../Images/pop_tub.jpg';
import { useNavigate } from 'react-router-dom';
function MaxSeat() {
    const history=useNavigate();
    const selectedSeats=()=>{
      if(selectedNumber!==null){
        console.log(selectedNumber);
        history('/Seat/'+selectedNumber);
    }}
    const [selectedNumber, setSelectedNumber] = useState(null);

  const handleNumberClick = (number) => {
    setSelectedNumber(number);
  };
  return (
    <div className="seat-selection-dialog">
      <h2>Select Number of Seats</h2><br/>
      <div className="image-popcorn">
      <img height = {160} width={160}src={pop_tub}></img>
      </div>
      <div className='Number_seats'>
      <span className='Number' onClick={()=>handleNumberClick(1)}>1</span>
      <span className='Number'onClick={()=>handleNumberClick(2)}>2</span>
      <span className='Number' onClick={()=>handleNumberClick(3)} >3</span>
      <span className='Number' onClick={()=>handleNumberClick(4)}>4</span>
      <span className='Number' onClick={()=>handleNumberClick(5)}>5</span> 
      <span className='Number' onClick={()=>handleNumberClick(6)}>6</span>
      <span className='Number' onClick={()=>handleNumberClick(7)}>7</span>
      <span className='Number' onClick={()=>handleNumberClick(8)}>8</span>
      <span className='Number' onClick={()=>handleNumberClick(9)}>9</span>
      <span className='Number' onClick={()=>handleNumberClick(10)}>10</span>
      </div><br/><br/>
      <Button variant='outlined' sx={{color:"white",backgroundColor:"RGB(255 3 12)",'&:hover': {
      color: 'white', // Change text color on hover
      backgroundColor: 'RGB(255 3 12)', // You can keep the background color the same if you want
    },width:"320px",borderRadius:"7px"}} onClick={selectedSeats} disabled={selectedNumber===null}>Selected Seats : {selectedNumber}</Button>
    </div> 
  )
}

export default MaxSeat