import React from 'react';
import UITab1People from './UITap1People';
import {
    IonCard,
    IonCardTitle
} from '@ionic/react';
import './Tab1.css';

interface PropsMovies{
    moviesApi:any[],
}

const UITab1Title: React.FC<PropsMovies> = ({moviesApi}) => {
  return (
    <div>
        {
            moviesApi.map((item, index)=> (
                <div key={index}>
                    <IonCard className='ion-card'>
                        <IonCardTitle className='card-title'>{item.title}</IonCardTitle>
                            <UITab1People 
                                moviesApi={moviesApi}
                                index={index}
                            />
                    </IonCard>
                </div>
            ))
        }
    </div>
  );
};

export default UITab1Title;