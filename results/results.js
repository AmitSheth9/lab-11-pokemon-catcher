

import { getPokedex, findById } from '../utils.js';
import { pokeArray } from '../data.js';

const container = document.getElementById('container');
const results = document.getElementById('results');

const resultsArray = getPokedex();
console.log(resultsArray);

const capturedUnique = resultsArray.filter(item => {
    if (item.captured > 0) {
        return item.captured;
    }
});
console.log(capturedUnique);
results.textContent = `You played 10 games and encountered ${resultsArray.length} unique Pokemon, and captured ${capturedUnique.length} unique Pokemon`;



//find by ID we have the id in resultsArray, we compare it with array of
//we want
for (let dataItem of pokeArray) {
    for (let statItem of resultsArray){
        if (dataItem.id === statItem.id){
            statItem.name = dataItem.pokemon;
            console.log(statItem);
        }
    }
}
console.log(resultsArray);    //names added


const nameArray = resultsArray.map(item =>{
    return item.name;
}); 

const capturedArr = resultsArray.map(item => {
    return item.captured;
});

console.log(nameArray);


const ctx = document.getElementById('myChart');

const myChart = new Chart(ctx, {
    type: 'bar',
    data: { 
        labels: nameArray,
        datasets: [{
            label: 'Times Captured',
            data: capturedArr,
            backgroundColor: [
                
                'brown'
                
            ],
            borderWidth: 2

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
                text: 'Pokemon'
            }
        }
    },
});

const chartTwo = document.getElementById('charttwo');

const encounteredArr = resultsArray.map(item => {
    return item.encountered;
});

console.log(encounteredArr);

const encounteredChart = new Chart(chartTwo, {
    type: 'bar',
    data: { 
        labels: nameArray,
        datasets: [{
            label: 'Times Encountered',
            data: encounteredArr,
            backgroundColor: [
                'orange',
                
            ],
            borderWidth: 2

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
                text: 'Pokemon'
            }
        }
    },
});
