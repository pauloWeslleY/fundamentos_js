//! Function Declaration

function sayHello() {
   console.log('Hello');
}

sayHello();

function sayHelloTo(name) {
   console.log(`Hello ${name}!`);
}

sayHelloTo('Harry');

function returnHi() {
   return 'Hi';
}

const greeting = returnHi();
console.log(greeting);
console.log(returnHi());

function tellMeHi(name) {
   return `Hi ${name}`;
}

console.log(tellMeHi("Joe"));