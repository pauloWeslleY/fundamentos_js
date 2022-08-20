function goodMorning() {
   console.log('Good Morning!!!');
}

const goodAfternoon = function() {
   console.log('Good Afternoon!');
}


// ? passa uma função como parametro pra outra função
function exeAnyThing(fn) {
   if (typeof fn === 'function') {
      fn()

   }
}

exeAnyThing(3)
exeAnyThing(goodMorning)
exeAnyThing(goodAfternoon)

//? 2) Retornar uma função a partir de uma outra função
function potency(base) {
   return function (exp) {
      return Math.pow(base, exp)
   }
}

const potencyThe2 = potency(2)
console.log(potencyThe2(8))

const result = potency(3)(4)
console.log(result)

//* Challenge Class!!!!!!!!
//! somar(3)(4)(5)


//fixme fn -> 3 * 7
//fixme fn -> 3 + 7
//fixme fn -> 3 - 7
//! calc(3)(7)(fn)