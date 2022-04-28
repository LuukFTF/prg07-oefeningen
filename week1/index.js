const { fetch } = require('native-fetch')

fetch('https://www.boredapi.com/api/activity')
    .then(response => response.json())
    .then(data => mapData(data));


function mapData(data) {
    data.map(mapFunction)
}

function mapFunction(num) {
    console.log(num)
}

// 

const numbers = [4, 9, 16, 25];
const newArr = numbers.map(Math.sqrt)
 
console.log(newArr)