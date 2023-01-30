function Products(name, price, sale = 0.50) {
   this.name = name;
   this.price = price;
   this.sale = sale;

   this.calcPriceFinal = function () {
      return this.price * (1 - this.sale)
   }

}

const products1 = new Products('Pencil', 9)
// console.log(products1.name)

const products2 = new Products('Book', 45)
// console.log(products2.price)
// console.log(products2.calcPriceFinal())

class Product {
   // name = name
   // price = price
   // sale = sale

   constructor(name, price, sale = 0.5) {
      this.name = name
      this.price = price
      this.sale = sale
   }

   sumPriceFinal() {
      return this.price * (1 - this.sale)
   }
}

const prod = new Product('Notebook', 4500, 0.8)
console.log(prod.price);
console.log(prod.sumPriceFinal());