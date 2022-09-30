//! Promise #04
function isGenerate(min, max, time) {
   if (min > max) [max, min] = [min, max]

   return new Promise(resolve => {
      setTimeout(() => {
         const calculator = max - min + 1
         const random = parseInt(Math.random() * calculator) + min
         resolve(random)
      }, time)
   })
}

function isGenerateNum() {
   return Promise.all([
      isGenerate(1, 50, 4000),
      isGenerate(1, 50, 1000),
      isGenerate(1, 50, 500),
      isGenerate(1, 50, 3000),
      isGenerate(1, 50, 100),
      isGenerate(1, 50, 1500),
   ])
}

console.time('promise')
isGenerateNum()
   .then(console.log)
   .then(() => {
      console.timeEnd('promise')
   })
