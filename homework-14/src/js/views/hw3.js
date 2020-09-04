// №1 Створити функцію getMaxDigit(number) – яка отримує будь - яке число та виводить найбільшу цифру в цьому числі.

function getMaxDigit(number) {
  let someNumber = number.toString().split("");
  return Math.max(...someNumber);
}

export default getMaxDigit;
