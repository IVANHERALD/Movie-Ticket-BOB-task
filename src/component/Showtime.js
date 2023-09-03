import React ,{useEffect,useState}from 'react'
import { Button } from '@mui/material'
import './Styles/Showtime.css'
import { useNavigate,useParams } from 'react-router-dom'

function Showtime() {
    const history=useNavigate();
    const { movieName } = useParams(); // 
  const [theatreData, setTheatreData] = useState([]);
    const TimeClick=()=>{
        history('/Seat');
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
      }, [movieName]);
  return (
    <div><ul>
    {theatreData.map((theatre, index) => (
      <li key={index}>
        <p>Theatre Name: {theatre.theatre_name}</p>
        <p>Theatre Location: {theatre.theatre_location}</p>
      </li>
    ))}
  </ul>
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