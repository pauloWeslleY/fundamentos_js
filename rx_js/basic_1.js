// console.log('Test!');

let a = 4;
console.log(a);

//! Function Declaration
function goodMorning() {
   console.log('Good Morning!!');
}

goodMorning();

//* Function Expression
const goodAfternoon = function () {
   console.log('Good Afternoon!!');
}

goodAfternoon(); //? undefined


//? Function
function calc(a, b = 0) {
   return a + b;
}

let result = calc(2, 56);
console.log(result);

result = calc(4, 6, 5, 67, 87, 45);
console.log(result);

result = calc(4);
console.log(result);