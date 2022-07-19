const numbers = [1, 2, 3, 4, 5, 6];

const sum = (all, el) => all + el
const calc = numbers.reduce(sum);

console.log(calc);