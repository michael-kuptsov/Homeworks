//<--------------------------------------------->Task 1<--------------------------------------------->
function plus(a, b) {
  if (arguments.length < 2) {
    return "You have to put 2 numbers if you want to use this function";
  }
  if (typeof a !== "number" || typeof b !== "number") {
    a = Number(a);
    b = Number(b);
  }
  if (isNaN(a) || isNaN(b) || a === null || b === null || a === undefined || b === undefined) {
    return "ERROR, you can put only numbers";
  }
  return a + b;
}
//Этого не было в ТЗ но решил подзапариться немнорго с проверками,узнал что есть argument и с его помощью я могу понять передали ли 2 аргумента в функцию так как при последнем темте оно выдало мне NaN так как Number + undefind (потому что в аргументе пусто было) давал именно жто и с помощью жтого аргумента я решил проблему
console.log(plus(231456, 6758439));
console.log(plus(123467, "675843902"));
console.log(plus(6574382, NaN));
console.log(plus(6547382));

function minus(a, b) {
  if (arguments.length < 2) {
    return "You have to put 2 numbers if you want to use this function";
  }
  if (typeof a !== "number" || typeof b !== "number") {
    a = Number(a);
    b = Number(b);
  }
  if (isNaN(a) || isNaN(b) || a === null || b === null || a === undefined || b === undefined) {
    return "ERROR, you can put only numbers";
  }
  return a - b;
}

function multiply(a, b) {
  if (arguments.length < 2) {
    return "You have to put 2 numbers if you want to use this function";
  }
  if (typeof a !== "number" || typeof b !== "number") {
    a = Number(a);
    b = Number(b);
  }
  if (isNaN(a) || isNaN(b) || a === null || b === null || a === undefined || b === undefined) {
    return "ERROR, you can put only numbers";
  }
  return a * b;
}

function divide(a, b) {
  if (arguments.length < 2) {
    return "You have to put 2 numbers if you want to use this function";
  }
  if (typeof a !== "number" || typeof b !== "number") {
    a = Number(a);
    b = Number(b);
  }
  if (isNaN(a) || isNaN(b) || a === null || b === null || a === undefined || b === undefined) {
    return "ERROR, you can put only numbers";
  }
  if (b === 0) {
    return "Error, division by 0";
  }
  return a / b;
}

function calculator(a, b, func) {
  if (arguments.length < 3) {
    return "You have to put 2 numbers and a function if you want to use this function";
  }
  if (typeof func !== "function") {
    return "ERROR, 3-rd place for Function";
  }
  if (typeof a !== "number" || typeof b !== "number") {
    a = Number(a);
    b = Number(b);
  }
  if (isNaN(a) || isNaN(b) || a === null || b === null || a === undefined || b === undefined) {
    return "ERROR, you can put only numbers";
  }
  return func(a, b);
}
//<--------------------------------------------->Task 2<--------------------------------------------->
const plusFunc = function (a, b) {
  // Забавная ситуация что в какой то момент я хотел как в пайтоне четко указать какой тип данных я хочу получить в функции и написал что a: number, b: number и  что в конце хочу тоде number как в Питоне,но меня ждало разочарование и прекрасная строка которая говорит что для анотаций нужно подключать ТайпСкрипт,вот так вот
  if (arguments.length < 2) {
    return "You have to put 2 numbers if you want to use this function";
  }
  if (typeof a !== "number" || typeof b !== "number") {
    a = Number(a);
    b = Number(b);
  }
  if (isNaN(a) || isNaN(b) || a === null || b === null || a === undefined || b === undefined) {
    return "ERROR, you can put only numbers";
  }
  return a + b;
};

console.log(plusFunc(213453, 56473829));

const minusFunc = function (a, b) {
  if (arguments.length < 2) {
    return "You have to put 2 numbers if you want to use this function";
  }
  if (typeof a !== "number" || typeof b !== "number") {
    a = Number(a);
    b = Number(b);
  }
  if (isNaN(a) || isNaN(b) || a === null || b === null || a === undefined || b === undefined) {
    return "ERROR, you can put only numbers";
  }
  return a - b;
};
console.log(minusFunc(76584, 56473829));

const multiplyFunc = function (a, b) {
  if (arguments.length < 2) {
    return "You have to put 2 numbers if you want to use this function";
  }
  if (typeof a !== "number" || typeof b !== "number") {
    a = Number(a);
    b = Number(b);
  }
  if (isNaN(a) || isNaN(b) || a === null || b === null || a === undefined || b === undefined) {
    return "ERROR, you can put only numbers";
  }
  return a * b;
};
console.log(multiplyFunc(76584, 56477584390));

const divideFunc = function (a, b) {
  if (arguments.length < 2) {
    return "You have to put 2 numbers if you want to use this function";
  }
  if (typeof a !== "number" || typeof b !== "number") {
    a = Number(a);
    b = Number(b);
  }
  if (isNaN(a) || isNaN(b) || a === null || b === null || a === undefined || b === undefined) {
    return "ERROR, you can put only numbers";
  }
  if (b === 0) {
    return "Error, division by 0";
  }
  return a / b;
};
console.log(divideFunc(76584, 52));
console.log(divideFunc(76584, 0));

const calculatorFunc = function (a, b, func) {
  if (arguments.length < 3) {
    return "You have to put 2 numbers and a function if you want to use this function";
  }
  if (typeof func !== "function") {
    return "ERROR, 3-rd place for Function";
  }
  if (typeof a !== "number" || typeof b !== "number") {
    a = Number(a);
    b = Number(b);
  }
  if (isNaN(a) || isNaN(b) || a === null || b === null || a === undefined || b === undefined) {
    return "ERROR, you can put only numbers";
  }
  return func(a, b);
};

console.log(calculatorFunc(86594384, 52, divideFunc));
console.log(calculatorFunc(543584, 52, multiplyFunc));
console.log(calculatorFunc(765184, 0, divideFunc));

//<--------------------------------------------->Task 3<--------------------------------------------->

const plusArrowFunc = (a, b) => {
  if (typeof a !== "number" || typeof b !== "number") {
    a = Number(a);
    b = Number(b);
  }
  if (isNaN(a) || isNaN(b) || a === null || b === null || a === undefined || b === undefined) {
    return "ERROR, you can put only numbers";
  }
  return a + b;
};

console.log(plusArrowFunc(213453, 76473829));

const minusArrowFunc = (a, b) => {
  if (typeof a !== "number" || typeof b !== "number") {
    a = Number(a);
    b = Number(b);
  }
  if (isNaN(a) || isNaN(b) || a === null || b === null || a === undefined || b === undefined) {
    return "ERROR, you can put only numbers";
  }
  return a - b;
};

console.log(minusArrowFunc(76584, 56473829));

const multiplyArrowFunc = (a, b) => {
  if (typeof a !== "number" || typeof b !== "number") {
    a = Number(a);
    b = Number(b);
  }
  if (isNaN(a) || isNaN(b) || a === null || b === null || a === undefined || b === undefined) {
    return "ERROR, you can put only numbers";
  }
  return a * b;
};

console.log(multiplyArrowFunc(76584, 56477584390));

const divideArrowFunc = (a, b) => {
  if (typeof a !== "number" || typeof b !== "number") {
    a = Number(a);
    b = Number(b);
  }
  if (isNaN(a) || isNaN(b) || a === null || b === null || a === undefined || b === undefined) {
    return "ERROR, you can put only numbers";
  }
  if (b === 0) {
    return "Error, division by 0";
  }
  return a / b;
};

console.log(divideArrowFunc(76584, 52));

const calculatorArrowFunc = (a, b, func) => {
  //   if (arguments.length < 3) {
  //     return "You have to put 2 numbers and a function if you want to use this function";} Не сработает тут так как стрелочные функции не имеют своего аргумента, поэтому я закомментировал эту проверку,а в остальныъ я просто удалил проверку
  if (typeof func !== "function") {
    return "ERROR, 3-rd place for Function";
  }
  if (typeof a !== "number" || typeof b !== "number") {
    a = Number(a);
    b = Number(b);
  }
  if (isNaN(a) || isNaN(b) || a === null || b === null || a === undefined || b === undefined) {
    return "ERROR, you can put only numbers";
  }
  return func(a, b);
};

console.log(calculatorArrowFunc(86594384, 52, divideArrowFunc));
