export { getCircleArea, getRectangleArea, getCircleLength, PI };

const PI = 3.14159; // Либо Math.PI

function getCircleArea(radius) {
  if (typeof radius !== "number" || radius <= 0) {
    throw new Error("Неверный радиус");
  }
  const result = PI * radius * radius;
  return `Запрашиваемая площадь круга: ${result}`;
}

function getRectangleArea(width, height) {
  if (typeof width !== "number" || width <= 0) {
    throw new Error("Неверная ширина");
  }
  if (typeof height !== "number" || height <= 0) {
    throw new Error("Неверная высота");
  }
  const result = width * height;
  return `Запрашиваемая площадь прямоугольника: ${result}`;
}

function getCircleLength(radius) {
  if (typeof radius !== "number" || radius <= 0) {
    throw new Error("Неверный радиус");
  }
  const result = 2 * PI * radius;
  return `Запрашиваемая длина окружности: ${result}`;
}
