const { log } = require("console");

function factorial(x) {
  return new Promise((resolve) => {
    let result = x;
    for (let i = x - 1; i >= 1; i--) {
      result = result * i;
    }
    setTimeout(() => {
      resolve(result);
    }, 1000);
  });
}

function power(x, y) {
  return new Promise((resolve, reject) => {
    let result = x;
    for (let i = 1; i < y; i++) {
      result = result * x;
    }
    setTimeout(() => {
      resolve(result);
    }, 3000);
  });
}

function calculate(x, y) {
  let xFact = factorial(x);
  let yFact = factorial(y);
  let xPy = power(x, y);
  let yPx = power(y, x);
  let calculation = [xFact, yFact, xPy, yPx];
  return Promise.all(calculation).then((res) => {
    return res.reduce((acc, val) => acc + val);
  });
}
calculate(5, 4).then((val) => console.log(val));
