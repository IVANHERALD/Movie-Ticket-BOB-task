import React ,{useEffect,useState}from 'react'
import { Button } from '@mui/material'
import './Styles/Showtime.css'
import { useNavigate,useParams } from 'react-router-dom'

function Showtime() {
    const history=useNavigate();
    const { movieName } = useParams(); // 
  const [theatreData, setTheatreData] = useState([]);
  const [currentDate, setCurrentDate] = useState('');
    const TimeClick=()=>{
        history('/SeatSelection');
    }
    useEffect(() => {
        const fetchData = async () => {
          console.log("write");
          try {
            const response = await fetch(`/movies/${movieName}`); // Use template literals
            if (response.ok) {
              const data = await response.json();
              setTheatreData(data.theaters);
            } else {
              console.error('Error fetching theatre data:', response.statusText);
            }
          } catch (error) {
            console.error('Error fetching theatre data:', error);
          }
        };
    
        fetchData();
        const currentDate = new Date();
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    setCurrentDate(currentDate.toLocaleDateString(undefined, options));
      }, [movieName]);
  return (
    <div>
       <div className='current-date'>
        <center>{currentDate}</center>
      </div>
      <div>
    {theatreData.map((theatre, index) => (
      <span key={index}>
        <p>Movie Name:{movieName}</p>
        <p>Theatre Name: {theatre.theatre_name}</p>
        <p>Theatre Location: {theatre.theatre_location}</p>
      </span>
    ))}
  </div>
    <div className='Showtime-Buttons'>
        <Button variant='outlined' sx={{color:'white',borderColor:'#FFFF'}} onClick={TimeClick}> 10:00 AM<br/>
        EPIQ</Button>
    <Button variant='outlined' sx={{color:'white',borderColor:'#FFFF'}}onClick={TimeClick}>02:00 PM</Button>
    <Button variant='outlined' sx={{color:'white',borderColor:'#FFFF'}}onClick={TimeClick}>06:00 PM<br/>DOLBY</Button>
    <Button variant='outlined' sx={{color:'white',borderColor:'#FFFF'}}onClick={TimeClick}>10:00 PM</Button>
    </div></div>
  )
}

export default Showtime