const { factorial, power, calculate } = require("./decoupling");
const sum = require("./hello");

test("sum of 1 and 2 is 3", () => {
  expect(sum(1, 2)).toBe(3);
});

test("factorial of 5 is 120", () => {
  expect(factorial(5)).toBe(120);
});

test("power of 3^5 is 243", () => {
  expect(power(3, 5)).toBe(243);
});

test("calculate (5,4) result is 1793", () => {
  expect(calculate(5, 4)).toBe(1793);
});
