//? Promise #01
const isFirstEl = isArrOrString => isArrOrString[0]
const isLetterLowerCase = letter => letter.toLowerCase()


new Promise(function (resolve) {
   resolve(['Barry', 'Iris', 'Joe', 'Cisco'])
})
   .then(isFirstEl)
   .then(isFirstEl)
   .then(isLetterLowerCase)
   .then(console.log)



//? Promise #02
setTimeout(function () {
   console.log('Running callback...')

   setTimeout(function () {
      console.log('Running!')

      setTimeout(function () {
         console.log('Running third!')
      }, 2000)
   }, 2000)
}, 2000)

function isWaitFor(time = 2000) {
   return new Promise(function (res) {
      setTimeout(function () {
         console.log('Running!!!')
         res()
      }, time)
   })
}

isWaitFor(3000).then(() => isWaitFor()).then(isWaitFor)



//? Promise #03
function isGenerate(min, max) {
   if (min > max) [max, min] = [min, max]

   return new Promise(resolve => {
      const calculator = max - min + 1
      const random = parseInt(Math.random() * calculator) + min
      resolve(random)
   })
}

isGenerate(1, 75)
   .then(num => num * 10)
   .then(isNumX10 => `this number generate was ${isNumX10}`)
   .then(console.log)








