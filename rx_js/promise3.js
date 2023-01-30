//! Promise 3
//? Promise #03

function isGenerate(min, max, time) {
   if (min > max) [max, min] = [min, max]

   return new Promise(resolve => {
      setTimeout(function (){
         const calculator = max - min + 1
         const random = parseInt(Math.random() * calculator) + min
         resolve(random)
      }, time)
   })
}


function isGenerateNumber() {
   return Promise.all([
      isGenerate(1, 60, 4000),
      isGenerate(1, 60, 500),
      isGenerate(1, 60, 3000),
      isGenerate(1, 60, 500),
   ])
}