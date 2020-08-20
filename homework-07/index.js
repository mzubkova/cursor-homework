const ukraine = { tax: 0.195, middleSalary: 1789, vacancies: 11476 };
const latvia = { tax: 0.25, middleSalary: 1586, vacancies: 3921 };
const litva = { tax: 0.15, middleSalary: 1509, vacancies: 1114 };

// № 1 Створіть функцію getMyTaxes.call(country, salary) -> number; – яка рахує скільки податків ви заплатите як IT - спеціаліст в якійсь з країн.Функція повинна викликатись через call та працювати з даними через this

function getMyTaxes(salary) {
  return this.tax * salary;
}

// № 2 Створіть функцію getMiddleTaxes.call(country) -> number; – яка рахує скільки у середньому податків платятт IT - спеціалісти у кожній країні. (tax * middleSalary).Функція повинна викликатись через call та працювати з даними через this

function getMiddleTaxes() {
  return this.tax * this.middleSalary;
}

// № 3 Створіть функцію getTotalTaxes.call(country) -> number; – яка рахує, скільки всього податків платять IT - спеціалісти у кожній країні. (tax * middleSalary * vacancies).Функція повинна викликатись через call та працювати з даними через this

function getTotalTaxes() {
  return this.tax * this.middleSalary * this.vacancies;
}

// № 4 Створіть функцію getMySalary(country) – яка буде писати в консоль об'єкт виду: { salary: number, taxes: number, profit: number } кожні 10 секунд. Значення salary – генеруйте випадковим чином у діапазоні 1500-2000. taxes – розраховується в залежності від вибраної країни та значення salary.
// profit = salary - taxes;

function getMySalary(country) {
  const minSalary = 1500;
  const maxSalary = 2000;
  setInterval(function () {
    let salary = Math.floor(
      Math.random() * (maxSalary - minSalary) + minSalary
    );
    const taxes = country.tax * salary;
    const profit = salary - taxes;
    return console.log({
      salary: salary,
      taxes: taxes,
      profit: profit,
    });
  }, 10000);
}

getMySalary(litva);

console.log(
  "№1 getMyTaxes.call(ukraine, 1500): ",
  getMyTaxes.call(ukraine, 1500)
);
console.log("№2 getMiddleTaxes.call(ukraine): ", getMiddleTaxes.call(ukraine));
console.log("№3 getTotalTaxes.call(latvia): ", getTotalTaxes.call(latvia));
