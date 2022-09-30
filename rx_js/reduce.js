//? Reduce #02
const cart = [
   {name: "Notebook", qtde: 10, price: 7.99},
   {name: "Book", qtde: 4, price: 27.10},
   {name: "Pencil", qtde: 3, price: 5.82},
   {name: "Scissors", qtde: 1, price: 19.20},
   {name: "Printer", qtde: 0, price: 649.50},
]

const getAll = item => item.qtde * item.price
const calc = (acc, el) => acc + el

const resultAll = cart
   .map(getAll)
   .reduce(calc)

console.log(resultAll)

//? Reduce #03
Array.prototype.myReduce = function (fn, initial) {
   let acc = initial
   //! TODO: USANDO O ELSE
   for (let i = 0; i < this.length; i++) {
      if (!acc && i === 0) {
         acc = this[i]
      } else {
         acc = fn(acc, this[i], i, this)
      }
   }
   //! TODO: USANDO O CONTINUE
   // for (let i = 0; i < this.length; i++) {
   //    if (!acc && i === 0) {
   //       acc = this[i]
   //       continue
   //    }
   //    acc = fn(acc, this[i], i, this)
   // }
   return acc
}

const resultAll2 = cart
   .map(getAll)
   .myReduce(calc)

console.log(resultAll)


