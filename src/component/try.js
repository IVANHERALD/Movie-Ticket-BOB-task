import React from 'react'
import { useEffect, useState } from 'react';
import { storage } from './Firebase';
import { ref, getDownloadURL} from 'firebase/storage';

function Try() {
    const fetchCSVData = async () => {
        try {
          const response = await fetch('/movies'); // Fetch data from your server's /movies endpoint
          if (response.ok) {
            const data = await response.json();
            console.log('CSV data:', data.data);
          } else {
            console.error('Error fetching CSV data:', response.statusText);
          }
        } catch (error) {
          console.error('Error fetching CSV data:', error);
        }
      }
    
  return (
    <div>
<button onClick={fetchCSVData}>fetch</button>
    </div>
  )
}

export default Try