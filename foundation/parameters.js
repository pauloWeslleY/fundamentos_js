function logParams(a, b, c) {
   console.log(a, b, c);
}

logParams(11,22,44,55,77);
logParams(11,22,44);
logParams(11, 22);
logParams(1);
logParams();

function defaultParams(a = 4, b = 7, c = 8) {
   console.log(a, b, c);
}

defaultParams(4, 5, 6);
defaultParams(6, 87);
defaultParams(6);
defaultParams();

console.log(1);
console.log(1, 2, 3, 4, 5, 6, 7, 8);

//? spread/rest
function logNums(...nums) {
   console.log(nums);
}
logNums(1, 2, 3, 5, 6, 7);

function sumAll(...nums) {
   let all = 0;
   for(let n of nums){
      all += n
   }
   return all
}

console.log(sumAll(1, 4, 56, 45, 67));