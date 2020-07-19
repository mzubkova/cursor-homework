const N_FIRST = +prompt("Enter a number");
const M_SECOND = +prompt("Enter the number again");

if (N_FIRST && M_SECOND === Number.isInteger(N_FIRST && M_SECOND));
const SKIP_NUMBERS = confirm("Skip even numbers?");
let numbers = 0;
for (let i = N_FIRST; i <= M_SECOND; i++) {
  if (SKIP_NUMBERS && i % 2 === 0) continue;
  else {
    numbers += i;
  }
}

console.log(`First number: ${N_FIRST}
Second number: ${M_SECOND}
Numbers: ${numbers}`);
