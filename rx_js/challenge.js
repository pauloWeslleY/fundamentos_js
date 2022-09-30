const cart = [
   {name: "Pencil", qtde: 10, price: 7.99, fragile: true},
   {name: "Printer", qtde: 1, price: 649.50, fragile: true},
   {name: "Book", qtde: 4, price: 27.10, fragile: false},
   {name: "Pen", qtde: 3, price: 5.82, fragile: false},
   {name: "Scissors", qtde: 1, price: 19.20, fragile: true},
]

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


//! filter, map, reduce
//[x] 1. fragile: true
//[x] 2. qtde * price -> all
//[x] 3. calc average


console.log("<|=== === === === === === Created by Me === === === === === ===|>")
//TODO: 1. fragile: true
const getValueTrue = item => item.fragile
const result = cart.filter(getValueTrue)
console.log(result)

//TODO: 2. qtde * price -> all
const isAdd = item => item.qtde * item.price
const result2 = cart.map(isAdd)
console.log("result:", result2)

//TODO: 3. calc average
const getResults = item => item.qtde * item.price
const calcAverage = (acc, el) => acc + el

const results = cart.map(getResults).reduce(calcAverage)
console.log(results)


console.log("<|=== === === === === === Created by Teacher === === === === === ===|>")
const isCalculatorAverage = (acc, el) => {
   const newQtde = acc.qtde + 1
   const newAll = acc.all + el
   console.log(acc, el)

   return {
      qtde: newQtde,
      all: newAll,
      average: newAll / newQtde
   }
}
const isAverageInitial = { qtde: 0, all: 0, average: 0 };

const average = cart
   .filter(item => item.fragile)
   .map(item => item.qtde * item.price)
   .myReduce(isCalculatorAverage, isAverageInitial)
   .average

console.log(`This average is ${average}!`)