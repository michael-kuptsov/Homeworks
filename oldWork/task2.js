const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(numbers);
numbers.splice(numbers.length, 0, 11);
console.log(numbers)
numbers.splice(0 , 0, 0);
console.log(numbers)
numbers.splice(0, 1);
numbers.splice(numbers.length - 1, 1);
console.log(numbers);
numbers.splice(2, 1, 99);
console.log(numbers);
console.log(numbers.length);