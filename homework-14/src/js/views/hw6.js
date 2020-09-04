// №6 Створіть функцію calculateWordLetters("тест")-- > { "т": 2, "е": 1, "с": 1 } – яка повертає об'єкт, в якому ключі це букви у слові, а значення – кількість їх повторень.

const calculateWordLetters = (string) => {
  let calculateWord = {};
  let maxLetterValue = 0;
  let maxLetter = "";
  for (let letter of string) {
    if (calculateWord.hasOwnProperty(letter)) {
      calculateWord[letter]++;
    } else {
      calculateWord[letter] = 1;
    }
  }
  for (let letter in calculateWord) {
    if (calculateWord[letter] > maxLetterValue) {
      maxLetter = calculateWord[letter];
      maxLetter = letter;
    }
  }
  return calculateWord;
};

export default calculateWordLetters;