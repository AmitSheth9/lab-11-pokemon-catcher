
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
    console.log(randomNum1, randomNum2, randomNum3);

    return [pokeArray[randomNum1], pokeArray[randomNum2], pokeArray[randomNum3]];
}