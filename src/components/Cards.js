import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <h1>Check out these EPIC Destinations!</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/books_background.jpg'
              text='Click to see my books collection'
              label='My Books'
              path='/mybooks'
            />
            <CardItem
              src='images/games_background.jpg'
              text='Click to see my games collection'
              label='My Games'
              path='/mygames'
            />
     
          </ul>
          <CardItem
              src='images/MyWay.png'
              text='My way corp © Since 2020'
              label='My way'
              path='/Home'
            />
       
        </div>
      </div>
    </div>
  );
}

export default Cards;
