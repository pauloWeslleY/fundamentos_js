const numbers = [1, 2, 3, 4, 5, 6];

const numV2 = numbers.map(el => (el * 2));

console.log(numbers, numV2);

const students = [
   { name: 'Barry', score: 6.4 },
   { name: 'Caitlin', score: 8.6 },
   { name: 'Cisco', score: 9.4 },
   { name: 'Harrison', score: 9.1 },
];

const getScore = el => el.score
const result = students.map(getScore).map(Math.ceil);

console.log(`Note students 1: ${result}`);

const resultScore = students.map(function (props) {
   return props.score;
});

console.log(resultScore, students);