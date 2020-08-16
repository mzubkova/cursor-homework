// №1 Створіть функцію getSubjects(students[0]-- > ["Math", "Algorithms", "Data science"] - яка повертає список предметів для конкретного студента.Зверніть увагу – назву предмету необхідно повертати з великої літери, а _ – замінити на пробіл

const students = [
  {
    name: "Tanya",
    course: 3,
    subjects: {
      math: [4, 4, 3, 4],
      algorithms: [3, 3, 3, 4, 4, 4],
      data_science: [5, 5, 3, 4],
    },
  },
  {
    name: "Victor",
    course: 4,
    subjects: {
      physics: [5, 5, 5, 3],
      economics: [2, 3, 3, 3, 3, 5],
      geometry: [5, 5, 2, 3, 5],
    },
  },
  {
    name: "Anton",
    course: 2,
    subjects: {
      statistics: [4, 5, 5, 5, 5, 3, 4, 3, 4, 5],
      english: [5, 3],
      cosmology: [5, 5, 5, 5],
    },
  },
];

const getSubjects = (students) =>
  Object.keys(students.subjects).map(
    (student) =>
      student[0].toUpperCase() +
      student.slice(1).toLowerCase().replace("_", " ")
  );

// const getSubjects = (students) => Object.keys(students.subjects).map(function formatName(name) {
//   const nameToUpperCase = name[0].toUpperCase() + name.slice(1).toLowerCase().replace('_', ' ');
//   return nameToUpperCase;
// });

// console.log(getSubjects(students[0]));

// №2 Створіть функцію getAverageMark(students[0])-- > 3.79 – яка поверне середню оцінку по усім предметам для переданого студента НЕ МАСИВА СТУДЕНТІВ.Оцінку округліть до 2ого знаку.Можна використовувати функції, написані у попередніх домашніх завданнях:)

const getAverage = (newArr) => {
  const intNumbers = newArr.filter((item) => Number.isInteger(item));
  const average =
    intNumbers.reduce((total, item) => total + item) / intNumbers.length;
  return average;
};

const getAverageMark = (student) => {
  let arrayMarks = [];
  const subjects = Object.keys(student.subjects);
  for (let key of subjects) {
    arrayMarks = [...arrayMarks, ...Object.values(student.subjects[key])];
  }
  return +getAverage(arrayMarks).toFixed(2);
};

// №3 Створіть функцію getStudentInfo(students[0])-- > { "course": 3, "name": "Tanya", "averageMark": 3.79 } – яка повертає інформацію загального виду по переданому студенту (вам знадобиться функція з попереднього завдання).Повинна бути виведена інформація: курс, ім'я, середня оцінка.

const getStudentInfo = (student) => {
  return {
    course: student.course,
    name: student.name,
    averageMark: getAverageMark(student),
  };
};

// №4 Створіть функцію getStudentsNames(students)-- > ["Anton", "Tanya, "Victor"] – яка повертає імена студентів у алфавітному порядку.

const getStudentsNames = (students) => {
  let arrayNames = [];
  students.forEach((student) => {
    arrayNames.push(student.name);
  });
  return arrayNames.sort();
};

// №5 Створіть функцію getBestStudent(students)-- > "Anton" – яка повертає кращого студента зі списку по показнику середньої оцінки.

const getBestStudent = (students) => {
  let arrayAverage = [];
  students.map((student, i, arr) => {
    arrayAverage.push(+getAverageMark(student));
    arrayAverageStud = Math.max(...arrayAverage);
    bestStudent = arr[i];
  });
  return bestStudent.name;
};

// №6 Створіть функцію calculateWordLetters("тест")-- > { "т": 2, "е": 1, "с": 1 } – яка повертає об'єкт, в якому ключі це букви у слові, а значення – кількість їх повторень.

const calculateWordLetters = (string) => {
  let calculateWord = {};
  let maxLetterValue = 0;
  let maxLetter = "";
  for (let letter of string) {
    if (calculateWord.hasOwnProperty(letter)) {
      calculateWord[letter]++;
    } else {
      calculateWord[letter] = 1;
    }
  }
  for (let letter in calculateWord) {
    if (calculateWord[letter] > maxLetterValue) {
      maxLetter = calculateWord[letter];
      maxLetter = letter;
    }
  }
  return calculateWord;
};

console.log("№1 getSubjects: ", getSubjects(students[0]));
console.log("№2 getAverageMark: ", getAverageMark(students[0]));
console.log("№3 getStudentInfo: ", getStudentInfo(students[2]));
console.log("№4 getStudentsNames: ", getStudentsNames(students));
console.log("№5 getBestStudent: ", getBestStudent(students));
console.log("№6 calculateWordLetters: ", calculateWordLetters("тест"));
