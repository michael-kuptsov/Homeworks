// Task 1
//-------------------------------------------------------------------------------------------------------------------------------------------------------------
// const luckyNumbers = [1, 2, 1, 0];

// let oddNumbers = 0;
// let evenNumbers = 0;

// for (let i = 0; i < luckyNumbers.length; i++) {
//   if (i % 2 === 0) {
//     evenNumbers += luckyNumbers[i];
//   } else {
//     oddNumbers += luckyNumbers[i];
//   }
// }

// if (evenNumbers === oddNumbers) {
//   console.log("It's a lucky ticket!");
// } else {
//   console.log("It's not a lucky ticket!");
// }
//Можно было сделать через переменную res и тернарный оператор, но Илья говорил что так лучше не писать по жтому сделал такой вариант через иф и элс

// let luckyNumbers2 = 123321;
// let counter = 0;

// while (luckyNumbers2 > 0) {
//   let res = luckyNumbers2 % 10;
//   luckyNumbers2 = Math.floor(luckyNumbers2 / 10); // гарантировано выкидываю все что с запятой и оставляю только целое число чтоб не попасть в проблему
//   counter++;
//   if (counter % 2 === 0) {
//     evenNumbers += res;
//   } else {
//     oddNumbers += res;
//   }
// }
// if (evenNumbers === oddNumbers) {
//   console.log("It's a lucky ticket!");
// } else {
//   console.log("It's not a lucky ticket!");
// }

// А это если волпрос был не в том как твое число из массива узнать а допустим из обычного числа
//
// ---------------------------------------------------------------------------------------------------------------------------------------------------------

//Task 2

let luckyNumbers2 = 123321;
let counter = 0;
let firstHalf = 0;
let secondHalf = 0;
luckyNumbers2 = luckyNumbers2.toString(); // переводим число в строку чтоб можно было его перебрать
for (let i = 0; i < luckyNumbers2.length; i++) {
  counter++;
  if (counter <= luckyNumbers2.length / 2) {
    firstHalf += Number(luckyNumbers2[i]);
  } else {
    secondHalf += Number(luckyNumbers2[i]);
  }
}
if (firstHalf === secondHalf) {
  console.log("It's a lucky ticket!");
} else {
  console.log("It's not a lucky ticket!");
}

// ---------------------------------------------------------------------------------------------------------------------------------------------------------------
