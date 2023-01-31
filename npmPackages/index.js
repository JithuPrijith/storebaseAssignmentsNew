const formulas = require("math-formulas");
const exactMath = require("exact-math");

console.log("square area", formulas.squareArea(20));

console.log("Rectangle area", formulas.rectangleArea(12, 16));

console.log(
  "cylinder total surface area",
  formulas.cylinderTotalSurfaceArea(8, 18)
);

console.log(exactMath.add(5, 16));

console.log(exactMath.mul(5, 10));
