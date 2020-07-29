const students = ["Олександр", "Ігор", "Олена", "Іра", "Олексій", "Світлана"];
const themes = [
  "Диференційне рівняння",
  "Теорія автоматів",
  "Алгоритми і структури даних",
];
const marks = [4, 5, 5, 3, 4, 5];

// №1 Розділіть студентів на пари(хлопець + дівчина) для работи над проєктом.У вас повинен вийти вкладений масив з парами студентів:
function getPairs(students) {
  let pair1 = [students.slice(0, 1).concat(students.slice(2, 3))];
  let pair2 = [students.slice(1, 2).concat(students.slice(3, 4))];
  let pair3 = [students.slice(2, 3).concat(students.slice(4, 5))];

  let res = pair1.concat(pair2, pair3);
  return res;
}

// №2 Зіставте пари з попереднього завдання та теми проєктів, над якими студенти будуть працювати.Повинен вийти вкладений масив виду:
function getStudentsThemes(pairs, themes) {
  const arrThemes = [];
  for (let i = 0; i < pairs.length; i++) {
    arrThemes[i] = [pairs[i].join(" і "), themes[i]];
  }
  return arrThemes;
}

// №3 Зіставте оцінки(marks) зі студентом(students):
function getStudentsMarks(students, marks) {
  const arrMarks = [];
  for (let i = 0; i < students.length; i++) {
    arrMarks[i] = [students[i], marks[i]];
  }
  return arrMarks;
}

// №4 Поставте кожній парі випадкову оцінку (від 1 до 5) за проект (тут функція буде нечистою, але не повинна мутувати массив):
function getRandomThemesMarks(pairsThemes) {
  const arrRandomMarks = [];
  const arrRandom = [];

  for (let i = 0; i < pairsThemes.length; i++) {
    arrRandomMarks[i] = [Math.floor(Math.random() * 5) + 1];
  }
  for (let i = 0; i < pairsThemes.length; i++) {
    arrRandom.push([pairsThemes[i] + ", " + arrRandomMarks[i]]);
  }
  return arrRandom;
}

const pairs = getPairs(students);
console.log(pairs);

const pairsThemes = getStudentsThemes(pairs, themes);
console.log(pairsThemes);

const studentMarks = getStudentsMarks(students, marks);
console.log(studentMarks);

const studentMarksRandom = getRandomThemesMarks(pairsThemes);
console.log(studentMarksRandom);
