// №1 Створити функцію getMaxDigit(number) – яка отримує будь - яке число та виводить найбільшу цифру в цьому числі.

function getMaxDigit(number) {
  let someNumber = number.toString().split("");
  return Math.max(...someNumber);
};

// №2 Створити функцію, яка визначає ступінь числа.Не використовуючи Math.pow та **.Використовуйте цикл

function pow(firstNum, degree) {
  let secondNum = firstNum;
  for (let i = 1; i < degree; i++) {
    secondNum *= firstNum;
  }
  return secondNum;
}

// №3 Створити функцію, яка форматує ім'я, роблячи першу букву великою.

function formatName(name) {
  let nameToUpperCase = name[0].toUpperCase() + name.slice(1).toLowerCase();
  return nameToUpperCase ;
};

// №4 Створити функцію, яка вираховує суму, що залишається після оплати податку від зарабітньої плати.

function wageTax(tax = 19.5, clientMoney = 1000) {
  let total = clientMoney - tax;
  return total;
};

// №5 Створити функцію, яка повертає випадкове ціле число в діапазоні від N до M.

function getRandomNumber(n, m) {
  let randomNumber = (Math.floor(Math.random() * (n-m) + m));
  return randomNumber;
};

// №6 Створити функцію, яка рахує скільки разів певна буква повторюється в слові.

function countLetters(name) {
  let countLetter = name.split("i").length - 1;
  return countLetter;
};

// №7 Створіть функцію, яка конвертує долари в гривні та навпаки в залежності від наявності символа $ або UAH в рядку.

function convertCurrency(currency, dollar) {
  let currencyUah = 27;
  let dollarItem = '$';
  if (dollarItem === '$') {
    return (currency * currencyUah) + (dollarItem = 'uah');
  } else (dollarItem !== '$'); {
    return alert= "error";
  }
}

// №8 Створіть функцію генерації випадкового паролю(тільки числа), довжина встановлюється користувачем або по замовчуванню = 8 символам.

function getRandomPassword(length = 8) {
  let numbers = '0123456789';
  let password = "";
  for (let i = 0, n = numbers.length; i < length; ++i) {
    password += numbers.charAt(Math.floor(Math.random() * n));
  }
  return password;
}

// №9 Створіть функцію, яка видаляє всі букви з речення.
// function deleteLetters(i, word) {
//   let string = "";
//     for (let i = 0; i < word.length; i++) {
//       string += i;
//       return string;
//     };

document.writeln(`Функція №1: ${getMaxDigit(2674)}`);
document.writeln(`Функція №2: ${pow(2, 3)}`);
document.writeln(`Функція №3: ${formatName("lida")}`);
document.writeln(`Функція №4: ${wageTax()}`);
document.writeln(`Функція №5: ${getRandomNumber(1, 5)}`);
document.writeln(`Функція №6: ${countLetters("Lucindia")}`);
document.writeln(`Функція №7: ${convertCurrency(100)}`);
document.writeln(`Функція №8: ${getRandomPassword(4)}`);
// document.writeln(`Функція №9: ${deleteLetters('fkjbniii')}`);
