// Створити функцію getMaxDigit(number) – яка отримує будь - яке число та виводить найбільшу цифру в цьому числі.

const SOME_NUMBER = function getMaxDigit(number) {
  return number[slice.Math.max(Math.random() * number.length)];
};

// Створити функцію, яка визначає ступінь числа.Не використовуючи Math.pow та **.Використовуйте цикл

function pow(firstNum, degree) {
  let secondNum = firstNum;
  for (let i = 1; i < degree; i++) {
    secondNum *= firstNum;
  }
  return secondNum;
}

// Створити функцію, яка форматує ім'я, роблячи першу букву великою.
// function formatName(params) {
//   const a = params[0].toUpperCase();
// };

// formatName('helga');
// console.log(formatName);
