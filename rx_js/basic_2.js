function goodMorning() {
   console.log('Good Morning!!!');
}

const goodAfternoon = function() {
   console.log('Good Afternoon!');
}

// ? Passar uma função como parametro pra outra função
function exeAnyThing(fn) {
   if (typeof fn === 'function') {
      fn()

   }
}

exeAnyThing(3)
exeAnyThing(goodMorning)
exeAnyThing(goodAfternoon)

//? 2 ==> Retornar uma função a partir de uma outra função
function potency(base) {
   return function(exp) {
      return Math.pow(base, exp)
   }
}

const potencyThe2 = potency(2)
console.log(potencyThe2(8))

const result = potency(3)(4)
console.log(result)

