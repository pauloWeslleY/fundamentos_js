function Products(name, price, sale = 0.50) {
   this.name = name;
   this.price = price;
   this._sale = sale;

   this.calcPriceFinal = function () {
      return this.price * (1 - this._sale)
   }
}

Products.prototype.log = function () {
   console.log(`Name: ${this.name} Price: R$${this.price}`)
}

Object.defineProperty(Products.prototype, 'sale', {
   get: function () {
      return this._sale
   },
   set: function (newSale) {
      if (newSale >= 0 && newSale <= 1) {
         this._sale = newSale
      }
   }
})

Object.defineProperty(Products.prototype, 'saleString', {
   get: function () {
      return `${this._sale * 100}% for sale!`
   }
})

const prod1 = new Products('Pencil', 9)
console.log(prod1.name)
prod1.log()

const products2 = new Products('Book', 45)
console.log(products2.price)
console.log(products2.calcPriceFinal())

products2.sale = 0.99

console.log(products2.sale)
console.log(products2.saleString)