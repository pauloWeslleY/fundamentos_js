const students = [
   { name: 'Barry', score: 6.4 },
   { name: 'Caitlin', score: 8.6 },
   { name: 'Cisco', score: 9.4 },
   { name: 'Harrison', score: 9.1 },
];

const greatStudent = students => students.score >= 9
const getScore = el => el.score
const average = (acc, el, i, array) => {
   if (i === array.length - 1) {
      return (acc + el) / array.length
   } else {
      return acc + el
   }
}

console.log(
   students
      .filter(greatStudent)
      .map(getScore)
      .reduce(average)
);