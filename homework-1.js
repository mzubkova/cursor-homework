const breadPrice = 15.678;
const meatPrice = 123.965;
const oilPrice = 90.2345;

// Використовуючи вбудований об'єкт Math – виведіть максимальне число
maxValue = Math.max(breadPrice, meatPrice, oilPrice);
console.log(maxValue);

// Використовуючи вбудований об'єкт Math – виведіть мінімальне число
minValue = Math.min(breadPrice, meatPrice, oilPrice);
console.log(minValue);

// Складіть вартість всіх товарів, помістіть її в змінну та виведіть цю суму
let total = breadPrice + meatPrice + oilPrice;
console.log(total);

// Відкиньте копійки у всіх товарів, потім – складіть цілу частину вартості кожного товару між собою.Округлення використовувати в МЕНЬШУ сторону.
floorValue = Math.floor(breadPrice + meatPrice + oilPrice);
console.log(floorValue);

// Виведіть суму товарів округлену до сотень. (Наприклад якщо вийшло 260, то виведіть 300)
let ceilValue = (Math.ceil(floorValue / 100) * 100);
console.log(ceilValue);

// Виведіть булеве значення: чи є сума всіх товарів(округлена в меншу сторону) парним чи непарним числом ?
let sum = 230;
if (sum & 1) {
  sum = Boolean();
  console.log(sum);
} else sum = Boolean();
{
  console.log(sum);
}

// let booleanNum = ((value % 2) == 0);
// console.log(booleanNum);

// Виведіть суму решти, при оплаті всіх товарів (без округлення), якщо клієнт платить 500 грн.
let clientMoney = 500;
clientValue = clientMoney - total;
console.log(clientValue);

// Виведіть середнє значення цін, округлене до другого знаку після коми
let breadMiddle = parseFloat(breadPrice.toFixed(2));
console.log(breadMiddle);

let meatMiddle = parseFloat(meatPrice.toFixed(2));
console.log(meatMiddle);

let oilMiddle = parseFloat(oilPrice.toFixed(2));
console.log(oilMiddle);

let numbers = [15.67, 123.97, 90.23];
let average = numbers.reduce((total, amount, index, array) => {
  total += amount;
  if (index === array.length - 1) {
    return total / array.length;
  } else {
    return total;
  }
});
console.log(parseFloat(average.toFixed(2)));

// Створіть змінну, в якої збережіть випадкову знижку(використовуйте функцію Math.random).
let discount = Math.floor(Math.random() * 100 + 1);
console.log(discount);

// Зробіть клієнту випадкову знижку та виведіть суму до оплати округлену до 2 знаків після коми.
let cost = total - total * (discount / 100).toFixed(2);
console.log(cost);

// Виведіть чистий прибуток, якщо клієнт заплатив зі знижкою та собівартість товарів рівно в два рази нижче їх ціни ?

let profit = (cost / 2 - total).toFixed(2);
console.log(profit);

// Створіть шаблонний рядок та виведіть всі обчислення вчинені в Base частині домашнього завдання у вигляді одного рядка наступного вигляду:

let str = `Максимальна ціна: ${maxValue}
Мінімальна ціна: ${minValue}
Вартість всіх товарів: ${total}
Округлена вартість: ${floorValue}
Округлену сума до сотень ${ceilValue}
Булеве значення: ${sum}
Суму решти, при оплаті всіх товарів (без округлення): ${clientValue}
Середнє значення ціни: ${breadMiddle}
Середнє значення ціни: ${meatMiddle}
Середнє значення ціни: ${oilMiddle}
Середнє значення ціни (разом): ${average}
Випадкова знижка: ${discount}
Випадкова знижка, суму до оплати: ${cost}
Чистий прибуток: ${profit}`;
console.log(str);


