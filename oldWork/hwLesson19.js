const array = [1, 5, 2, 9, 4];

for (let second = 0; second < array.length - 1; second++) {
  for (let i = 0; i < array.length - 1; i++) {
    console.log(array[i], array[i + 1]); // Пометка для себя как разботает цикл,сравниваю текущий эдемент со следующим
    if (array[i] > array[i + 1]) {
      console.log("Tyt menyaem"); //Тут меняем один на второй

      let temp = array[i];
      array[i] = array[i + 1];
      array[i + 1] = temp;
    }
  }
}
console.log(array);
