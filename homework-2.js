let numberFirst = +prompt("Enter a first number");
while (isNaN(numberFirst)) {
  numberFirst = +prompt("Enter a number again");
}

let numberSecond = +prompt("Enter the second number");
while (isNaN(numberFirst)) {
  numberFirst = +prompt("Enter the second again");
}

while (numberFirst > numberSecond) {
  numberSecond = +prompt("Еhe second number should be greater");
}

let skipNumbers = confirm("Skip even numbers?");
let numbers = 0;
for (let i = numberFirst; i <= numberSecond; i++) {
  if (skipNumbers && i % 2 === 0) continue;
  else {
    numbers += i;
  }
}

console.log(`First number: ${numberFirst}
Second number: ${numberSecond}
Numbers: ${numbers}`);
