import "babel-polyfill";
import average from "./js/views/hw1";
import getMaxDigit from "./js/views/hw3";
import { students, themes, marks } from "./js/variables/variables";
import getPairs from "./js/views/hw4";
import getMedian from "./js/views/hw5";
import calculateWordLetters from "./js/views/hw6";
import { ukraine, latvia, litva } from "./js/variables/variables";
import getMyTaxes from "./js/views/hw7";
import { student } from "./js/views/hw8";
import Student from "./js/views/hw8";
import generateBlocks from "./js/views/hw9";
console.log(
  "Середнє значення цін, округлене до другого знаку після коми: ",
  parseFloat(average.toFixed(2))
);
console.log("Найбільша цифра в цьому числі(12379): ", getMaxDigit(12379));
console.log("Масив з парами студентів: ", getPairs(students));
console.log("Медіана всіх переданих аргументів: ", getMedian(1, 2, 3, 4, 5));
console.log("calculateWordLetters (тест): ", calculateWordLetters("тест"));
console.log("Податки (Ukraine, 1500): ", getMyTaxes.call(ukraine, 1500));
console.log("Метод отримання середнього балу:", student.getAverageMark());
