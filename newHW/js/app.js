import { add, subtract, multiply, divide, checkValidNumber, calculate } from "./math.js";
import { getCircleArea, getRectangleArea, getCircleLength, PI } from "./geometry.js";

console.log(`15 + 7 = ${add(15, 7)}`);
console.log(`20 - 8 = ${subtract(20, 8)}`);
console.log(`6 * 9 = ${multiply(6, 9)}`);
try {
  console.log(`100 / 4 = ${divide(100, 4)}`);
  console.log(`10 / 0 = ${divide(10, 0)}`);
} catch (error) {
  console.error(error.message);
}
console.log(`10 + 5 = ${calculate(10, 5, "+")}`);
console.log(`20 - 8 = ${calculate(20, 8, "-")}`);
console.log(`6 * 9 = ${calculate(6, 9, "*")}`);
try {
  console.log(`100 / 4 = ${calculate(100, 4, "/")}`);
  console.log(`10 / 0 = ${calculate(10, 0, "/")}`);
} catch (error) {
  console.error(error.message);
}
console.log(`Площадь круга с радиусом 5 = ${getCircleArea(5)}`);
console.log(`Площадь прямоугольника с шириной 8 и высотой 12 = ${getRectangleArea(8, 12)}`);
console.log(`Длина окружности с радиусом 10 = ${getCircleLength(10)}`);
