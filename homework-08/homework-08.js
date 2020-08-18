// № 1 У студентів повинні бути наступні властивості: university, course, fullName, вони передаються при створенні студента(в конструктор).

// № 2 Створіть метод this.getInfo() -> "Студент 1го курсу Вищої Школи Психотерапії м.Одеса, Остап Родоманський Бендер", метод повертає сукупну інформацію про курс, учбовий заклад та імені студента.

// № 3 Створіть геттер оцінок this.marks, який повертає масив оцінок студента [5, 4, 4, 5]

// № 4 Створіть сеттер оцінок this.marks = 5, який дозволяє поставити оцінку студенту. Після того, як оцінка поставлена, геттер повинен повернути масив this.marks -> [5, 4, 4, 5, 5]

// № 5 Створіть метод отримання середнього балу this.getAverageMark() -> 4.6

// № 6 Створіть метод this.dismiss, який "виключить" студента. Після виклику цього методу – ставити студенту оцінки та отримувати їх більше не можна. (Ніяких помилок, просто повертається завжди null замість масиву оцінок)

// № 7 Створіть метод this.recover, який дозволить поновити студента

class Student {
  constructor(university, course, fullName) {
    this.university = university;
    this.course = course;
    this.fullName = fullName;
    this.arrayMarks = [5, 4, 4, 5];
    this.isDismiss = false;
  }

  getInfo() {
    return `Студент ${this.course}го курсу ${this.university}, ${this.fullName}`;
  }

  get marks() {
    if (this.isDismiss) return null;
    else return this.arrayMarks;
  }

  set marks(mark) {
    if (this.isDismiss) return null;
    else return this.arrayMarks.push(mark);
  }

  getAverageMark() {
    return (this.getAverageMark = this.arrayMarks.reduce(
      (total, amount, index, array) => {
        total += amount;
        if (index === array.length - 1) {
          return total / array.length;
        } else {
          return total;
        }
      }
    ));
  }

  dismiss() {
    return (this.isDismiss = true);
  }

  recover() {
    return (this.isDismiss = false);
  }
}

const student = new Student(
  "Вищої Школи Психотерапії м.Одеса",
  1,
  "Остап Родоманський Бендер"
);

// студент для перевірки на виключення та поновлення
const student2 = new Student(
  "ХНУ імені В. Н. Каразіна",
  3,
  "Василина Прекрасна"
);

student.marks = 5;
console.log("№ 1:", student);
console.log("№ 2 метод getInfo():", student.getInfo());
console.log("№ 4 геттер оцінок marks:", student.marks);
console.log(
  "№ 5 метод отримання середнього балу getAverageMark:",
  student.getAverageMark());
console.log("№ 6 виключення студента:", student2.dismiss());
console.log("оцінки студента після виключення:", student2.marks);
student2.marks = 4;
console.log("№ 7 поновлення студента:", student2.recover());
console.log("оцінки студента після поновлення:", student2.marks);

// № 1 Створіть новий клас BudgetStudent, який повністю наслідує клас Student

// № 2 Бюджетний студент може отримати стипендію за допомогою методу this.getScholarship.Отримання стипендії супроводжується виведенням інформації в консоль: Ви отримали 1400 грн.стипендії

// № 3 Метод отримання стипендії автоматично викликається кожні 30 секунд післе створення об'єкту. Підказка: викликайте його в constructor

// № 4 Студент отримує стипендію тільки в тому випадку, якщо середній бал у нього вище або дорівнює 4.0

// № 5 Якщо студента виключено, він не отримує стипендію(думаю це було і так очевидно : ) )

class BudgetStudent extends Student {
  constructor(scholarship, university, course, fullName) {
    setInterval(() => {
      this.getScholarship();
    }, 30000);
    super(university, course, fullName);
    this.scholarship = scholarship;
  }

  getScholarship() {
    if (this.getAverageMark <= 4 && this.dismiss) {
      return null;
    } else return `Ви отримали ${this.scholarship} грн.стипендії`;
  }
}

const budgetStudent = new BudgetStudent(
  1400,
  "ХНУ імені В. Н. Каразіна",
  2,
  "Петро Розумков"
);
// студент для перевірки на виключення та поновлення
const budgetStudent2 = new BudgetStudent(
  1400,
  "ХНУ імені В. Н. Каразіна",
  1,
  "Орест Розумков"
);

budgetStudent.marks = 1;
console.log(
  "середній бал:",
  budgetStudent.getInfo(),
  budgetStudent.getAverageMark());
console.log("стипендія: ", budgetStudent.getScholarship());
budgetStudent2.marks = 5;
console.log(
  "середній бал:",
  budgetStudent2.getInfo(),
  budgetStudent2.getAverageMark());
console.log("стипендія:", budgetStudent2.getScholarship());
console.log(
  "виключення студента:",
  budgetStudent.getInfo(),
  budgetStudent.dismiss());
console.log("стипендія: ", budgetStudent.getScholarship());
