//* Challenge Class!!!!!!!!
//! somar(3)(4)(5)

function calc(a) {
   return function (b) {
      return function (c) {
         return a + b + c
      }
   }
}

const calculator = calc(3)(4)
console.log(calculator(13))
console.log(calc(3)(10)(30))


//[] fn -> 3 * 7
//[] fn -> 3 + 7
//[] fn -> 3 - 7
//! calc(3)(7)(fn)

function calculatorX(x) {
   return function (y) {
      return function (fn) {
         return fn(x, y)
      }
   }
}

function subtract(a, b) {
   return a - b
}

function multiply(a, b) {
   return a * b
}

const resultA = calculatorX(10)(5)(subtract)
const resultB = calculatorX(10)(5)(multiply)
console.log(resultA)
console.log(resultB)