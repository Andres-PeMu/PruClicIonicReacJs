import React, { useEffect, useState } from 'react';
import Fils  from './Fils'



const Api = () => {

    const [characters, setCharacters] = useState([]);

    const initialUrl = "https://swapi.dev/api/films/";

    const fetchDAta = (url:any)=>{
    fetch(initialUrl)
        .then(responseApi => responseApi.json())
        .then(dataApi => setCharacters(dataApi.results))
        .catch(error => console.log(error));
    }

    useEffect(()=>{
        fetchDAta(initialUrl)
    },[])
    
    return(
        <div className='contrainer'>
            <Fils dataFils={characters} />
        </div>
    )
}

export default Api