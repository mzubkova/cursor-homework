// № 5 Створіть метод отримання середнього балу this.getAverageMark() -> 4.6

class Student {
  constructor(university, course, fullName) {
    this.university = university;
    this.course = course;
    this.fullName = fullName;
    this.arrayMarks = [5, 4, 4, 5];
    this.isDismiss = false;
  }

  get marks() {
    if (this.isDismiss) {
      return null;
    }
    return this.arrayMarks;
  }

  set marks(mark) {
    if (this.isDismiss) {
      return null;
    }
    return this.arrayMarks.push(mark);
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
}

export const student = new Student(
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

export { Student };