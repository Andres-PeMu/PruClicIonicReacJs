import React, { useEffect, useState } from 'react';
import './Tab1.css';
import { fetchDAta } from '../../services/ApiGetFilmsAndPeoples';
import UITab1 from './UITap1Title';

const Tab1: React.FC = () => {

  const [moviesApi, setMovies] = useState([]);
  


useEffect(()=>{
  fetchDAta().then(response => setMovies(response.results))
},[])

  return (
    <div>
    {
     <UITab1
      moviesApi={moviesApi}
     />
    }
</div>
  );
};

export default Tab1;
