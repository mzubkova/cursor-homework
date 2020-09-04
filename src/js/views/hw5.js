// №4 Створіть функцію getMedian(...numbers) – яка рахує медіану всіх переданих в неї аргументів.НЕЦІЛІ ЧИСЛА ІГНОРУЮТЬСЯ

const getMedian = (...numbers) => {
  const sortedNumbers = numbers.sort((a, b) => a - b);
  const lowMiddleNumbers = Math.floor((sortedNumbers.length - 1) / 2);
  const highMiddleNumbers = Math.ceil((sortedNumbers.length - 1) / 2);
  const medianNumbers =
    (sortedNumbers[lowMiddleNumbers] + sortedNumbers[highMiddleNumbers]) / 2;
  return medianNumbers;
};

export default getMedian;