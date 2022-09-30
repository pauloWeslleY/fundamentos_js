/*
   !TODO: Challenge Promise
*/

const fs = require('fs')
const path = require('path')

function isReadFile(way) {
   return new Promise(res => {
      fs.readFile(way, function (_, content) {
         res(content.toString())
      })
      console.log('Read after!!')
   })
}

const way = path.join(__dirname, 'data.txt')
isReadFile(way)
   .then(content => content.split('\n'))
   .then(line => line.join(','))
   .then(isContent => `this value is: ${isContent}`)
   .then(console.log)