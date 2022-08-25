//? => arrow function
const goodNight = () => console.log('Good Night!!')
goodNight()

const salutation2 = name => 'You gonna tell me ' + name + ', all right'
console.log(salutation2('Cisco'))

const salutation = name => `Tell me ${name}, right!?!`
console.log(salutation('Barry'))

const somar = (...numbers) => {
   console.log(Array.isArray(numbers))
   console.log(typeof numbers)
   let resultAll = 0
   for (let n of numbers){
      resultAll += n
   }
   return resultAll
}

const isSubstract = (a, b) => a - b
console.log(`Result is calc ${isSubstract(4, 1)}!!!`)

console.log(somar(1, 4))
console.log(somar(1, 4, 6))
console.log(somar(1, 4, 6, 87, 98))

//! Challenge Arrow Function
const calculator = base => exp => Math.pow(base, exp)
console.log(calculator(35)(7))

//? this
Array.prototype.last = function () {
   console.log(this[this.length - 1])
}

Array.prototype.first = function() {
   console.log(this[0])
}

const isNumbers = [-333, 1, 2, 3, 500]
isNumbers.last()
isNumbers.first()