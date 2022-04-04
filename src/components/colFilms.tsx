import React from 'react';
import ColPeople from './colPeople';


interface propsMovies{
    moviesApi:any[],
}

const ColFilms: React.FC<propsMovies> = (moviesApi) => {  
    return (
      <div>
        {
          // moviesApi.map((item, index)=> (
          //   <div key={index}>
          //     <h2>{item.title}</h2>
          //     <ColPeople />
          //   </div>
          // ))
        }
      </div>
    );
  };
  
  export default ColFilms;