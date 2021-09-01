
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

