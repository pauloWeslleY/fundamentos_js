const numbers = [1, 2, 3, 4, 5, 6];

const students = [
   { name: 'Barry', score: 6.4 },
   { name: 'Caitlin', score: 8.6 },
   { name: 'Cisco', score: 9.4 },
   { name: 'Harrison', score: 9.1 },
];


//! Filter
const showScore = students.filter(el => el.score >= 9);
console.log(showScore);