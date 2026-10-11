export { add, subtract, multiply, divide, checkValidNumber, calculate };
function add(a, b) {
  const res = a + b;
  return res;
}

function subtract(a, b) {
  const res = a - b;
  return res;
}

function multiply(a, b) {
  const res = a * b;
  return res;
}

function divide(a, b) {
  if (b === 0) {
    throw new Error("Деление на ноль не допускается");
  }
  const res = a / b;
  return res;
}

function checkValidNumber(value) {
  if (!Number.isFinite(value)) {
    throw new Error("Недопустимый аргумент");
  }
}

function calculate(a, b, operation) {
  switch (operation) {
    case "+":
      checkValidNumber(a);
      checkValidNumber(b);
      return add(a, b);
    case "-":
      checkValidNumber(a);
      checkValidNumber(b);
      return subtract(a, b);
    case "*":
      checkValidNumber(a);
      checkValidNumber(b);
      return multiply(a, b);
    case "/":
      checkValidNumber(a);
      checkValidNumber(b);
      return divide(a, b);
    default:
      throw new Error("Неизвестная операция");
  }
}
