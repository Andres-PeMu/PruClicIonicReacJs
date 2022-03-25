import React, { useEffect, useState } from 'react';

const PeopleApi = () => {

    const [characters, setPeople] = useState([]);

    const initialUrl = "https://swapi.dev/api/people";

    const fetchDAta = (url:any)=>{
    fetch(initialUrl)
        .then(responseApi => responseApi.json())
        .then(dataApi => setPeople(dataApi.results))
        .catch(error => console.log(error));
    }

    useEffect(()=>{
        fetchDAta(initialUrl)
    },[])
    
    return(
        <div>
            <h5>{characters.map((item, index)=> (
                    <div key={index}>
                        <div className="card">
                            <div className="card-boby">
                                <h5 className="card-title">{item.name}</h5>
                            </div>
                        </div>
                    </div>
                ))}</h5>
        </div>
    )
}

export default PeopleApi