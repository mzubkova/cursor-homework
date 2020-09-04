// Виведіть середнє значення цін, округлене до другого знаку після коми
let numbers = [15.67, 123.97, 90.23];
let average = numbers.reduce((total, amount, index, array) => {
  total += amount;
  if (index === array.length - 1) {
    return total / array.length;
  } else {
    return total;
  }
});

export default average;