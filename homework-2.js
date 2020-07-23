let numberFirst = +prompt("Enter a first number");
let numberSecond = +prompt("Enter the second number");

if ((numberFirst == " ") || (isNaN(numberFirst)) || (isInteger(numberFirst)) || numberFirst.match(/^\s+$/) === null) {
  alert("Repeat");
  numberFirst = +prompt("Enter a number again");
}
else ((numberSecond == " ") || (isNaN(numberSecond)) || (isInteger(numberSecond)) || numberSecond.match(/^\s+$/) === null); {
    numberSecond = +prompt("Enter the second number again");
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
