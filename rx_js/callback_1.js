

function exec(fn, a, b) {
   return fn(a, b)
}

const somarNoTerminal = (x, y) => console.log(x + y);
const subtrairNoTerminal = (w, z) => console.log(w - z);
const subtrair = (a, b) => a - b

const result = exec(subtrair, 45, 875)
console.log(result);

exec(somarNoTerminal, 56, 38)
exec(subtrairNoTerminal, 182, 27)

const fn = () => console.log("you die!");
setInterval(fn, 1000)
