import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './Styles/Home.css';
import avenger from '../Images/avengers.jpeg';
function Home() {
 
  const [movieData, setMovieData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/movies'); // Fetch data from your server's /movies endpoint
        if (response.ok) {
          const data = await response.json();
          // Assuming the response contains a "movies" property
          setMovieData(data.movies);
        } else {
          console.error('Error fetching movie data:', response.statusText);
        }
      } catch (error) {
        console.error('Error fetching movie data:', error);
      }
    };

    // Fetch data when the component mounts
    fetchData();
  }, []); // The empty array [] ensures that this effect runs once when the component mounts
  const history=useNavigate();
  const sortedMovieData = movieData.sort((a, b) => {
 
  const yearA = parseInt(a.release_date.split('-')[0]);
  const yearB = parseInt(b.release_date.split('-')[0]);
  return yearB - yearA;
});

const handleClick=(movieName)=>
{
  history('/Showtime/'+movieName)
  console.log(movieName)
}

  return (
    <div className="profile">
      <h1>Movie List</h1>
      <div className='Container'>

        {sortedMovieData.map((movie) => (
      
         
        
          <p className='movie_card' key={movie.id}>
            <img src={avenger} onClick={()=>handleClick(movie.movie_name)}/>
            <p>Movie Name: {movie.movie_name}</p>
            <p>Theatre Name: {movie.theatre_name}</p>
            <p>Theatre Location: {movie.theatre_location}</p>
            <p>Release Date: {movie.release_date}</p>
          
          </p>
        ))}
    
      </div>
      
    </div>
  );
}

export default Home;