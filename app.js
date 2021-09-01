
import { findById, getRandomPokemon, getPokedex, setPokedex, encounteredPokemon } from './utils.js';

let emptyArray = [];
setPokedex(emptyArray);
let randomPokeArray = getRandomPokemon();
renderPokemon(randomPokeArray);
const playButton = document.getElementById('playbutton');
let pokeCaught = 0;

playButton.addEventListener('click', () => {
    const capturedPokeEl = document.querySelector('input:checked');
    for (let item of randomPokeArray) {
        encounteredPokemon(item.id);
    }
    capturedPokemon(capturedPokeEl, randomPokeArray);
    console.log(getPokedex());

    pokeCaught = pokeCaught + 1;
    console.log(pokeCaught);
    if (pokeCaught > 9) {
        playButton.disabled = true;
    }
    
    randomPokeArray = getRandomPokemon();
    renderPokemon(randomPokeArray);
});


function renderPokemon(randomPokeArray) {
    const pictureOne = document.getElementById('pictureone');
    const pictureTwo = document.getElementById('picturetwo');
    const pictureThree = document.getElementById('picturethree');

    pictureOne.src = randomPokeArray[0].url_image;
    pictureTwo.src = randomPokeArray[1].url_image;
    pictureThree.src = randomPokeArray[2].url_image;
}
function capturedPokemon(capturedPokeEl, randomArrayAgain) {
    const capturedPokedex = getPokedex();
    if (capturedPokeEl.value === '1') {
        const capturedObjectOne = findById(capturedPokedex, randomArrayAgain[0].id);
        console.log(capturedObjectOne);
        capturedObjectOne.captured++;
    }
    if (capturedPokeEl.value === '2') {
        const capturedObjectTwo = findById(capturedPokedex, randomArrayAgain[1].id);
        capturedObjectTwo.captured++;
    }
    if (capturedPokeEl.value === '3') {
        const capturedObjectThree = findById(capturedPokedex, randomArrayAgain[2].id);
        capturedObjectThree.captured++;
        console.log(capturedObjectThree);
    }
    setPokedex(capturedPokedex);
}
