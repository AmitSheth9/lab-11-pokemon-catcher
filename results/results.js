

import { getPokedex } from "../utils.js";

const container = document.getElementById('container');
const results = document.getElementById('results');

const resultsArray = getPokedex();
console.log(resultsArray);

const capturedArray = resultsArray.filter(item => {
    if(item.captured > 0) {
        return item.captured;
    }
});
console.log(capturedArray);
results.textContent = `You played 10 games and encountered ${resultsArray.length} unique Pokemon, and captured ${capturedArray.length} unique Pokemon`;