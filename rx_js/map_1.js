let numbers = [1, 3, 56, 56, 45]

let root = numbers.map(Math.sqrt)
console.log(root)


let variables = [1, 34, 45, 56]
function calc(a) {
   return a * 2;
}
const calc1 = a => a * 2
const result = variables.map(calc1)
console.log('result first function', result)



let isNumbers = [1, 3, 56, 56, 45]
const double = n => n * 2
console.log(isNumbers.map(double))

const names = ['Barry', 'Cisco', 'Harrison', 'Joe', "Caitlin"]
const firstLetter = text => text[0]
const letter = names.map(firstLetter)
console.log(letter, names)

const cart = [
   {name: "Notebook", qtde: 10, price: 7.99},
   {name: "Book", qtde: 4, price: 27.10},
   {name: "Pencil", qtde: 3, price: 5.82},
   {name: "Scissors", qtde: 1, price: 19.20},
   {name: "Printer", qtde: 0, price: 649.50},
]

const showNames = index => index.name
console.log(cart.map(showNames))

const calculator = index => index.qtde * index.price
const resultsCalc = cart.map(calculator)
console.log(resultsCalc)