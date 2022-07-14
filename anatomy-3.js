//* Function expression
const increment1 = function (n) {
   return n + 1;
}

//* Arrow Function is always anonymous
const increment2 = (n) => {
   return n + 1;
}
const increment3 = n => n + 1;

console.log(increment1(54));
console.log(increment2(34));
console.log(increment3(145));

const sum = (a, b) => a + b;
console.log(sum(12, 45));