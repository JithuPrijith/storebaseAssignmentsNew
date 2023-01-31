function factorial(x) {
  let result = x;
  for (let i = x - 1; i >= 1; i--) {
    result = result * i;
  }
  return result;
}

function power(x, y) {
  let result = x;
  for (let i = 1; i < y; i++) {
    result = result * x;
  }
  return result;
}

function calculate(x, y) {
  let xFact = factorial(x);
  let yFact = factorial(y);
  let powerofxy = power(x, y);
  let powerofyx = power(y, x);
  return xFact + yFact + powerofxy + powerofyx;
}

calculate(5, 4);

module.exports = {
  factorial,
  power,
  calculate,
};
