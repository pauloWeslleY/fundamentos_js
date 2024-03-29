//? Filter #01, 02, 03
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



//? <| === === === === === === |> Challenge method filter
Array.prototype.myFilter = function () {
   let price = []
   for (let i = 0; i < cart.length; i++){
      if (cart[i].price < 50) {
         price.push(cart[i])
      }
   }
   console.log(price);
}

Array.prototype.myFilter1 = function (fn) {
   let price = []
   for (let i = 0; i < this.length; i++){
      if (fn(this[i], i, this)) {
         price.push(this[i])
      }
   }
   return price
}

const isValid = cart.myFilter1(qtdMoreToZero).map(getName)

console.log(isValid)
