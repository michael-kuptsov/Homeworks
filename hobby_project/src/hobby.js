//мысли и важные моменты во время создания 
const guessInput = document.getElementById("guessInput");       //cоздаю переменные document обращаемся к html get просим найти эдемент по айдишнику 
const checkButton = document.getElementById("checkButton");
const answerField = document.getElementById("answerField");
console.log(guessInput, checkButton, answerField); //проверка
// function checkGuess() {
//   console.log("тап тап"); тут был тест 
// }
    const secretNumber = Math.floor(Math.random() * 101); // mfloor отбрасывает дробную часть как если я правильно понял // такой знак а mrandom генерит рандобнре число от 0 ло 0.99 и умножаем чтоб узнать кто там у нас будет.Знания-сила
    console.log("Загаданное число:", secretNumber); 

function checkGuess() {
//   const userGuess = guessInput.value; //создаем неизменную переменную и говорим ей что ты будешь вравна значению что есть в inputguess
//   console.log(userGuess, typeof userGuess); // получваем значение и его тип(он будет стринг что странно так как в инпуте я указал number)Почитал и понял что был не прав.Форма всегда дает стринг а значит нудно просто переопрелеоить 
    const userGuess = guessInput.valueAsNumber;
    console.log(userGuess, typeof userGuess);
    if (userGuess === secretNumber){
               // console.log("Молодец!Ты победил(a)"); тест
               answerField.textContent = "Молодец!Ты победил(a)"
    }
    else if(userGuess < secretNumber){
        // console.log("Мимо,бери выше!");
                       answerField.textContent ="Мимо,бери выше!"
    }
    else {
        // console.log("Перебор,бери пониже!")
                       answerField.textContent = "Перебор,бери пониже!"
    }

}
//узнал интересную вещь что такими играми через цикл можно положить сайт
checkButton.addEventListener("click", checkGuess);// добавил обработчика которому говорю Эй братан, ты следишь за тем что когда есть клик то мы вызываем функцию checkGuess
// функцию передаем но не вызываем а то она сразу при открытии страницы сработает и косяк 
