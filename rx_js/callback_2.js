const fs = require('fs')
const path = require('path')

const way = path.join(__dirname, 'data.txt')

function showContent(_, data) {
   console.log(data.toString());
}

console.log("Init...");
fs.readFile(way, showContent)
fs.readFile(way, (_, data) => console.log(data.toString()))
console.log("End...");

console.log('Start Sync!');
const result = fs.readFileSync(way)
console.log(result.toString());
console.log('End Sync!');