//[] Lesson Class

function somar(y) {
   return function (e) {
      return function (cod) {
         return y + e + cod
      }
   }
}

const result = somar('M')('N')('J')
console.log(result)
