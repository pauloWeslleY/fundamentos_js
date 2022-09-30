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
}, 2000)
