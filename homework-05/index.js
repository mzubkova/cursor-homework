// №1 Створіть функцію getRandomArray(length, min, max) – яка повертає масив випадкових цілих чисел.У функції є параметри: length - довжина масиву, min – мінімальне значення цілого числа, max – максимальне значення цілого числа.

const getRandomArray = (length, min, max) => {
  return Array.apply(null, Array(length)).map(function () {
    return Math.floor(Math.random() * (max - min)) + min;
  });
};

// №2 Створіть функцію getModa(...numbers) – яка вираховує моду всіх переданих в неї аргументів.НЕЦІЛІ ЧИСЛА ІГНОРУЮТЬСЯ

// const array = [1, 3, 5, 66, 3, 3, 45, 3];
// const getModa = array.filter((item, index) => array.indexOf(item) !== index);

// console.log(getModa);

// №3 Створіть функцію getAverage(...numbers) – яка рахує середнє арифметичне всіх переданих в неї аргументів.НЕЦІЛІ ЧИСЛА ІГНОРУЮТЬСЯ

const getAverage = (...numbers) => {
  const intNumbers = numbers.filter((item) => Number.isInteger(item));
  const average =
    intNumbers.reduce((total, item) => total + item) / intNumbers.length;
  return average;
};

// const numbers = [1, 3, 8, 6.7];
// const intNumbers = numbers.filter((item) => Number.isInteger(item));
// const average = intNumbers.reduce((total, amount, index, array) => {
//   total += amount;
//   if (index === array.length - 1) {
//     return total / array.length;
//   } else {
//     return total;
//   }
// });

// console.log(parseFloat(average));

// №4 Створіть функцію getMedian(...numbers) – яка рахує медіану всіх переданих в неї аргументів.НЕЦІЛІ ЧИСЛА ІГНОРУЮТЬСЯ

const getMedian = (...numbers) => {
  const sortedNumbers = numbers.sort((a, b) => a - b);
  const lowMiddleNumbers = Math.floor((sortedNumbers.length - 1) / 2);
  const highMiddleNumbers = Math.ceil((sortedNumbers.length - 1) / 2);
  const medianNumbers =
    (sortedNumbers[lowMiddleNumbers] + sortedNumbers[highMiddleNumbers]) / 2;
  return medianNumbers;
};

// №5 Створіть функцію filterEvenNumbers(...numbers) – яка фільтрує парні числа передані як аргументи функції

const filterEvenNumbers = (...numbers) => {
  const evenNumbers = numbers.filter((item) => item % 2);
  return evenNumbers;
};

// №6 Створіть функцію countPositiveNumbers(...numbers) – яка порахує кількість чисел більших 0

const countPositiveNumbers = (...numbers) => {
  return numbers.filter((item) => item > 0).length;
};

// №7 Створіть функцію getDividedByFive(...numbers) – яка відфільтрує усі елементи в масиві та залишить тільки ті, які діляться на ціло на 5

const getDividedByFive = (...numbers) => {
  return (dividedNumbers = numbers.filter((item) => item % 5 == 0));
};

// №8 Створіть функцію replaceBadWords(string) – яка 1) розіб'є фразу на слова, 2) замінить погані слова на зірочки (*). При вирішенні цього завдання необхідно розбити масив на слова за допомогою функції .split(" "), після чого масив необхідно буде склеїти .join(" ") Погані слова: shit та fuck. Передбачте можливість розширювати список цих слів у майбутньому.

const replaceBadWords = (string) => {
  const badWords = ["fuck", "shit"];
  let regepx = new RegExp(badWords[0] + "|" + badWords[1], "g", "i");
  let newtString = string.split(" ");
  return newtString.map((word) => word.replace(regepx, "****")).join(" ");
};

// №9 Створіть функцію divideByThree(word), яка розбиває кожне слово на умовні склади по 3 букви.Якщо букв менше трьох – не розбиває.Пробіли завжди видаляються.Рядок приводится до нижнього регістру.

// const divideByThree = (word) => {
//   const newString = [];
//   for (let i = 0; i < word.length; i + 3) {
//     if (word.length <= 3) {
//       newString.push(word.slice(i).toLowerCase());
//     } else {
//       newString.push(word.slice(i, i + 3).toLowerCase().replace(/\s+/g, ' ').trim());
//     }
//   };
//   return newString;
// };

// console.log(divideByThree("g hgHHHhgj ghk"));

// №10 Створіть функцію generateCombinations(word), яка видасть всі можливі перестановки(унікальні, без повторень) букв в слові.Для тестів не передавайте слова в яких більше 10 букв. Краще взагалі обмежити работу функції 10 буквами.

// function generateCombinations([...word]) {
//   if (word.length === 1) return word;
//   else if (word.length > 10) return false;

//   return word
//     .map((thisChar, index) => {
//       const remainingChars = [...word.slice(0, index), ...word.slice(index + 1)];
//       return generateCombinations(remainingChars)
//     .map(remainder => thisChar + remainder);
//     })
//     .reduce((acc, cur) => [...acc, ...cur]);
// }

// console.log(generateCombinations("generate"));
console.log("№1 getRandomArray: ", getRandomArray(5, 1, 69));
console.log("№3 getAverage: ", getAverage(1, 3, 8, 6.6));
console.log("№4 getMedian: ", getMedian(1, 2, 3, 4, 5));
console.log("№5 filterEvenNumbers: ", filterEvenNumbers(1, 3, 8, 6, 7, 12));
console.log(
  "№6 countPositiveNumbers: ",
  countPositiveNumbers(1, 3, 8, 6, 7, 12, -8)
);
console.log(
  "№7 getDividedByFive: ",
  getDividedByFive(6, 2, 55, 78, 2, 55, 57, 87, 23, 2, 56, 2, 55)
);
console.log(
  "№8 replaceBadWords: ",
  replaceBadWords("Are you fucking kidding (shit) ?")
);
