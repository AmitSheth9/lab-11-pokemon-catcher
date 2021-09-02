

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



//find by ID we have the id in resultsArray, we compare it with array of
//we want
for (let dataItem of pokeArray) {
    for(let statItem of resultsArray){
        if(dataItem.id === statItem.id){
            statItem.name = dataItem.pokemon;
            console.log(statItem);
        }
    }
}
console.log(resultsArray);    //names added


const nameArray = resultsArray.map(item =>{
    return item.name;
}); 



console.log(nameArray);


const ctx = document.getElementById('myChart');

const myChart = new Chart(ctx, {
    type: 'bar',
    data: { 
        labels: nameArray,
        datasets: [{
           
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