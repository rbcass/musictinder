import React, { useEffect } from 'react';
import { Navbar } from '../../components';
import julian from '../../assets/julian.jpg';
import TinderCard from 'react-tinder-card';
import {images} from '../../constants';
import {TiTickOutline} from 'react-icons/ti';
import {ImCross} from 'react-icons/im';
import {IconContext} from "react-icons";
import {Ticker} from '../../components';
import  { useState } from 'react'
import './Match.css';
import stock from  './stock.jpg'

const people = [
  {
    name: 'Julian Banks',
    url: 'https://m.media-amazon.com/images/M/MV5BYjY1ZTQ5NzktY2Q5MC00NTkxLWIzOTItYjlhMjY0MmZkMTYzXkEyXkFqcGdeQXVyMzU2MzE5MjU@._V1_.jpg',
    type: 'Bassist',
    genre:'Blues'
  },
  {
    name: 'Erica Wemboe',
    url: 'https://cdn.rapzilla.com/wp-content/uploads/2019/02/23120808/erica-mason-0003-e1550260151564.jpg',
    type: 'Engineer',
    genre:'Jazz'
  },
  {
    name: 'The Marbles',
    url: 'https://i0.wp.com/www.indiebuddie.com/wp-content/uploads/2022/11/modernlove-scaled.jpg?resize=672%2C372&ssl=1',
    type: 'Band',
    genre: 'Rock'
  },
  {
    name: 'Space Duck Inc',
    url: 'https://www.cvinyl.com/images/labels/duck2.jpg',
    type: 'Establishment',
    genre: 'Rock'
  },
  {
    name: 'Xion Hamz',
    url: 'https://upload.wikimedia.org/wikipedia/commons/c/c6/Mike_Park_Honolulu_2008.jpg',
    type: 'Guitarist',
    genre: 'Pop'
  },
  {
    name: 'Wendy Weeper',
    url: 'https://images.pexels.com/photos/5331161/pexels-photo-5331161.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    type: 'Guitarist',
    genre: 'Pop'
  },
  {
    name: 'The 1969',
    url: 'https://images.pexels.com/photos/210887/pexels-photo-210887.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    type: 'Band',
    genre: 'Pop'
  },
  {
    name: 'BB Prince',
    url: 'https://images.pexels.com/photos/8107086/pexels-photo-8107086.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    type: 'Musician',
    genre: 'Jazz'
  }
]

const windowWidth = window.innerWidth;
console.log(windowWidth);


const Match = () => {


  
//WE WANT THE PEOPLE TO APPEAR 'RANDOMLY'

//function shuffles the array
const shuffle = (array) => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
};

  
// const characters = {data.people}
const characters = shuffle(people);
const [lastDirection, setLastDirection] = useState()

const swiped = (direction, nameToDelete) => {
  console.log('removing: ' + nameToDelete)
  setLastDirection(direction)
  

}
//DELETE MAYBE?
const handleSwipe = (direction, character) => {
  console.log('swiped ' + direction + ' on ' + character.name);
  setLastDirection(direction);
}

const outOfFrame = (name) => {
  console.log(name + ' left the screen!')
}



  

  return(
  <div className='match'>
    <Navbar/>
    <Ticker/>
    <div style={{ backgroundImage: `url(${images.pong})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover', minHeight: '90vh' }}>
      <div id='like'>Like</div>
      <div id='dislike'>Dislike</div>
      <div className='cardContainer'>
        {characters.map((character) =>
          <TinderCard className='swipe' key={character.name} onSwipe={(dir) => swiped(dir, character.name)} onCardLeftScreen={() => outOfFrame(character.name)}>


<div style={{ backgroundImage:  `url(${character.url})`}} 
   className='card' >
    
              <h3 className='nameh3'><span>{character.name}</span></h3>
              <h3 className='typee'><span>{character.type}</span></h3>
              <h3 className='genreCard'><span>{character.genre}</span></h3>      
              
              {/**here are the buttons (react icons lol)  */}
              <div className='swipeButt'>
        <IconContext.Provider value={{className:'tick'}}>
        <TiTickOutline  />
        </IconContext.Provider>

        <IconContext.Provider value={{className:'cross'}}>
        <ImCross />
        </IconContext.Provider>
      </div>
               
              
            </div>
          </TinderCard>
        )}
      </div>

      {/**we are going to try to add buttons now */}
      
      {/**text sayong of they liked or disliked*/}
     
      {lastDirection ? (
  <h2 className='messageSwipe'>
    You {lastDirection === 'left' ? 'liked' : 'disliked'} this.
  </h2>
) : (
  <h2 className='infoText' />
)} 


      

      </div>
  </div> 
)};

export default Match;
