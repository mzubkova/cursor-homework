// Створіть функцію, яка повертає проміс getRandomChinese(length).Функція працює таким чином:

// Запускається цикл (підказка: можна використовувати while) length раз, кожен прохід циклу дивимось на останні 5 цифр результату виклику методу Date.now() Наприклад отримали const sign = 16086;.
// Конвертуємо отриману цифу в рядок String.fromCharCode(sign); та чекаємо 50 ms
// Функція gerRandomChinese(length) повинна повернути рядок довжиною(length) з китайськими ієрогліфами.Час роботи проміса має складати length * 50ms.
// (Якщо викликати getRandomChinese(4), отримаємо результат "촛궻簽紙" за 200ms

function getSecondsToday() {
  const sign = Date.now().toString();
  const today = sign.slice(-5);
  return some = Number(today).toLocaleString("zh-Hans-CN-u-nu-hanidec");
}

function getRandomChinese(length) {
  return new Promise((resolve, reject) => {
    if (length < 0) {
      reject();
    } else {
      setTimeout(() => {
        this.getSecondsToday();
        resolve();
      }, length * 50);
    }
  });
}

async function random() {
  try {
    await getRandomChinese(4);
    console.log(`done: 200ms ${getSecondsToday()}`);
    await getRandomChinese(50);
    console.log(`done: 2500ms ${getSecondsToday()}`);
  } catch {
    console.log("error");
  }
}

random();
