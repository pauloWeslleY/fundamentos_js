class Product {
   constructor(name, price, sale = 0.5) {
      this.name = name;
      this.price = price;
      this.sale = sale;
   }

   get name() {
      return `Product => ${this._name}`
   }

   set name(newName){
      this._name = newName.toUpperCase()
   }

   get price() {
      return this._price
   }

   set price(newPrice) {
      if (newPrice >= 0) {
         this._price = newPrice
      }
   }

   get sumPriceFinal() {
      return this.price * (1 - this.sale)
   }
}

const prod = new Product('Notebook', 4500, 0.8)
// prod.name = 'book'
prod.price = -20
console.log(prod.price);

console.log(prod.name);
console.log(prod.price);
console.log(prod.sumPriceFinal);

console.log(typeof Product)