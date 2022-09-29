const cart = [
   {name: "Notebook", qtde: 10, price: 7.99},
   {name: "Book", qtde: 4, price: 27.10},
   {name: "Pencil", qtde: 3, price: 5.82},
   {name: "Scissors", qtde: 1, price: 19.20},
   {name: "Printer", qtde: 0, price: 649.50},
]

const getName = item => item.name
const qtdMoreToZero = item => item.qtde > 1
// const qtdMoreIdemToZero = item => item.qtde >= 0
// const qtdMoreItem = item => item.qtde >= 1000

const nameIsValid = cart
   .filter(qtdMoreToZero)
   .map(getName)

console.log(nameIsValid)