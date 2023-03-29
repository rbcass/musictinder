import React from 'react';
import { Navbar } from '../../components';
import julian from '../../assets/julian.jpg';
import TinderCard from 'react-tinder-card';
import {images} from '../../constants';
import  { useState } from 'react'
import './Match.css';
import stock from  './stock.jpg'

const people = [
  {
    name: 'Julian Banks',
    url: 'https://m.media-amazon.com/images/M/MV5BYjY1ZTQ5NzktY2Q5MC00NTkxLWIzOTItYjlhMjY0MmZkMTYzXkEyXkFqcGdeQXVyMzU2MzE5MjU@._V1_.jpg'
  },
  {
    name: 'Erica Wemboe',
    url: 'https://cdn.rapzilla.com/wp-content/uploads/2019/02/23120808/erica-mason-0003-e1550260151564.jpg',
  },
  {
    name: 'The Marbles',
    url: 'https://i0.wp.com/www.indiebuddie.com/wp-content/uploads/2022/11/modernlove-scaled.jpg?resize=672%2C372&ssl=1',
  },
  {
    name: 'Space Duck Inc',
    url: 'https://www.cvinyl.com/images/labels/duck2.jpg',
  },
  {
    name: 'Xion Hamz',
    url: 'https://upload.wikimedia.org/wikipedia/commons/c/c6/Mike_Park_Honolulu_2008.jpg',
  }
]


const Match = () => {

  
// const characters = {data.people}
const characters = people;
const [lastDirection, setLastDirection] = useState()

const swiped = (direction, nameToDelete) => {
  console.log('removing: ' + nameToDelete)
  setLastDirection(direction)
}

const outOfFrame = (name) => {
  console.log(name + ' left the screen!')
}
  
  

  return(
  <div>
    <Navbar/>
      <div className='cardContainer'>
        {characters.map((character) =>
          <TinderCard className='swipe' key={character.name} onSwipe={(dir) => swiped(dir, character.name)} onCardLeftScreen={() => outOfFrame(character.name)}>


<div style={{ backgroundImage:  `url(${character.url})`}} 
   className='card'>
    
              <h3 >{character.name}</h3>     
              
            </div>
          </TinderCard>
        )}
      </div>
      {lastDirection ? <h2 className='infoText'>You swiped {lastDirection}</h2> : <h2 className='infoText' />}


  </div> 
)};

export default Match;
