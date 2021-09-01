
import { pokeArray } from './data.js';

export function getRandomPokemon() {
    let randomNum1 = Math.floor(Math.random() * pokeArray.length);
    let randomNum2 = Math.floor(Math.random() * pokeArray.length);
    let randomNum3 = Math.floor(Math.random() * pokeArray.length);

    while (randomNum1 === randomNum2 || randomNum2 === randomNum3 || randomNum1 === randomNum3) {
        randomNum1 = Math.floor(Math.random() * pokeArray.length);
        randomNum2 = Math.floor(Math.random() * pokeArray.length);
        randomNum3 = Math.floor(Math.random() * pokeArray.length);
    }
    

    return [pokeArray[randomNum1], pokeArray[randomNum2], pokeArray[randomNum3]];
}

export function findById(trackerArray, id) {
    for (let item of trackerArray) {
        if (Number(item.id) === Number(id)){
            return item;
        }
       
    }
}

export function encounteredPokemon(id) {
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

export function setPokedex(array) {
    let stringPoke = JSON.stringify(array);
    localStorage.setItem('POKEDEX', stringPoke);
}
export function getPokedex() {
    const stringyPoke = localStorage.getItem('POKEDEX');
    if (!stringyPoke) {
        return [];
    }
    const arrayObjectPoke = JSON.parse(stringyPoke);
    return arrayObjectPoke;
}

