import React, {useState, useEffect} from 'react';
import { fetchDAtaName } from '../../services/ApiGetFilmsAndPeoples';
import { PropsMovies, People } from '../../interfaces/interfaces';
import {
    IonCard,
    IonCardContent,
    IonCardTitle,
    IonCardHeader
} from '@ionic/react';



const UITab1People: React.FC<PropsMovies> = ({index, moviesApi}) => {

    const [peoples, setPeoples] = useState([]);
    const [people, setPeople] = useState<People>();
    const [peo, setPeo] = useState(false);

    const seeDetails = (item)=>{
        setPeo(true)
        setPeople(item)
        console.log(people)
    }

    useEffect(()=>{      
        fetchDAtaName( moviesApi,index ).then(response => setPeoples(response))
        peoples.map(item => console.log(item.name))
    },[])

  return (
    <IonCardContent className='card-people-detail'>
        <div className='people-name'>
            {       
                peoples.map((item, index)=> (
                    <div key={index} className="">
                        <p className="">
                            <button onClick={()=> seeDetails(item)}  className='ion-button-people'>
                                {item.name}
                            </button>
                        </p>
                    </div>
                ))
            }
        </div>
        <div className='container-people-detail'>
            {peo ? (
            <IonCard className='card-detail'>
                <IonCardContent className='card-detail'>
                    <IonCardHeader className='card-header-detail'>
                        <IonCardTitle className='card-title-detail'>{people.name}</IonCardTitle>
                    </IonCardHeader>
                        <div className='p-detail'>
                            <p>Eye Color: {people.eye_color}</p>
                            <p>Gender: {people.gender}</p>
                            <p>Hair Color: {people.hair_color}</p>
                            <p>Height: {people.height}</p>
                            <p>Mass: {people.mass}</p>
                            <p>Skin Color: {people.skin_color}</p>
                        </div>
                </IonCardContent>
                <button className='button-detail' onClick={()=>setPeo(false)}>Cerrar</button>
            </IonCard>
            ):(
            <h1>press a button</h1>
            )}
        </div>
    </IonCardContent>
  );
};

export default UITab1People;