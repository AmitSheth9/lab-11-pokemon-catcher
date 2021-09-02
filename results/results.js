

import { getPokedex, findById } from '../utils.js';
import { pokeArray } from '../data.js';

const container = document.getElementById('container');
const results = document.getElementById('results');

const resultsArray = getPokedex();
console.log(resultsArray);

const capturedArray = resultsArray.filter(item => {
    if (item.captured > 0) {
        return item.captured;
    }
});
console.log(capturedArray);
results.textContent = `You played 10 games and encountered ${resultsArray.length} unique Pokemon, and captured ${capturedArray.length} unique Pokemon`;





const nameArray = resultsArray.filter(item =>{
    return item.pokemon;
});
console.log(nameArray);

const captured
const ctx = document.getElementById('myChart');

const myChart = new Chart(ctx, {
    type: 'bar',
    data: { 
        labels: nameArray,
        datasets: [{
            label: ,
            data: ,
        }]
    },
    options: {
      responsive: true,
      plugins: {
        legend: {
          position: 'top',
        },
        title: {
          display: true,
          text: 'Chart.js Bar Chart'
        }
      }
    },
  });