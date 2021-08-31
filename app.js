// import functions and grab DOM elements

// initialize global state

// set event listeners 
  // get user input
  // use user input to update state 
  // update DOM to reflect the new state
import { pokeArray } from './data.js';
import { getRandomPokemon } from './utils.js';

const pictureOne = document.getElementById('pictureone');
const pictureTwo = document.getElementById('picturetwo');
const pictureThree = document.getElementById('picturethree');


let randomPokeArray = getRandomPokemon();
pictureOne.src = randomPokeArray[0].url_image;
console.log(pictureOne);
pictureTwo.src = randomPokeArray[1].url_image;
pictureThree.src = randomPokeArray[2].url_image;

const captureButtonOne = document.getElementById('locationone');
const captureButtonTwo = document.getElementById('locationtwo');
const captureButtonThree = document.getElementById('locationthree');


let pokeTrackerArray = [];
captureButtonOne.addEventListener('click', () => {
  
      
});