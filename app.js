// import functions and grab DOM elements

// initialize global state

// set event listeners 
  // get user input
  // use user input to update state 
  // update DOM to reflect the new state
import { pokeArray } from './data.js';
import { findById, getRandomPokemon } from './utils.js';

let emptyArray = [];
setPokedex(emptyArray);
let randomPokeArray = getRandomPokemon();


renderPokemon(randomPokeArray);

for (let item of randomPokeArray) {
    encounteredPokemon(item.id);
}

console.log(getPokedex());

const playButton = document.getElementById('playbutton');
//

let pokeCaught = 1;

playButton.addEventListener('click', () => {
    
    const capturedPokeEl = document.querySelector('input:checked');
    console.log(capturedPokeEl.value);
    let randomArrayAgain = getRandomPokemon();
    renderPokemon(randomArrayAgain);
    
    for (let item of randomArrayAgain) {
        encounteredPokemon(item.id);
        

    }
    const capturedPokedex = getPokedex();
    if (capturedPokeEl.value === 1) {
        const capturedObjectOne = findById(capturedPokedex, randomArrayAgain[0].id);
        capturedObjectOne.captured++;
    }
    if (capturedPokeEl.value === 2) {
        let capturedObjectTwo = findById(capturedPokedex, randomArrayAgain[1].id);
        capturedObjectTwo.captured++;
    }
    if (capturedPokeEl.value === 3) {
        let capturedObjectThree = findById(capturedPokedex, randomArrayAgain[2].id);
        capturedObjectThree.captured++;
        console.log(capturedObjectThree);
    }
    console.log(capturedPokedex);
    setPokedex(capturedPokedex);
    console.log(getPokedex());
    pokeCaught = pokeCaught + 1;
    console.log(pokeCaught);
  
});



function renderPokemon(randomPokeArray) {
    const pictureOne = document.getElementById('pictureone');
    const pictureTwo = document.getElementById('picturetwo');
    const pictureThree = document.getElementById('picturethree');

    pictureOne.src = randomPokeArray[0].url_image;
    pictureTwo.src = randomPokeArray[1].url_image;
    pictureThree.src = randomPokeArray[2].url_image;


}
function capturedPokemon(id) {
    
    const pokedex = getPokedex();
    
    console.log(pokedex);
    setPokedex(pokedex);
}

function encounteredPokemon(id) {
    const pokeTracker = getPokedex();
    const pokeItem = findById(pokeTracker, id);
    
    if (pokeItem){
        pokeItem.encountered++;
        
    }
    else {
        const newPokeObject = { id: Number(id), encountered: 1, captured: 0 };
        pokeTracker.push(newPokeObject);

       
    }
    setPokedex(pokeTracker);
   
    
}

function setPokedex(array) {
    let stringPoke = JSON.stringify(array);
    localStorage.setItem('POKEDEX', stringPoke);
}
function getPokedex() {
    const stringyPoke = localStorage.getItem('POKEDEX');
    if (!stringyPoke) {
        return [];
    }
    const arrayObjectPoke = JSON.parse(stringyPoke);
    return arrayObjectPoke;
}

// captured pokemon gets item of radio button selected
//takes in 
//if captured object odesnt exist in tracker array add it to array, although it should be encountered already, otherwise increment captured property

//after this we stringify trackerArray and put it in localStorage. that sets pokedex. then we get pokedex by parsing it. what to do with these?

//we also need to keep track of how many games played.  every time button clicked increment gamespla
//