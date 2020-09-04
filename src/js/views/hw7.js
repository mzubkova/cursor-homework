// № 1 Створіть функцію getMyTaxes.call(country, salary) -> number; – яка рахує скільки податків ви заплатите як IT - спеціаліст в якійсь з країн.Функція повинна викликатись через call та працювати з даними через this

function getMyTaxes(salary) {
  return this.tax * salary;
}

export default getMyTaxes;