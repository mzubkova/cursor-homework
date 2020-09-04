// №1 Розділіть студентів на пари(хлопець + дівчина) для работи над проєктом.У вас повинен вийти вкладений масив з парами студентів:
function getPairs(students) {
  let pair1 = [students.slice(0, 1).concat(students.slice(2, 3))];
  let pair2 = [students.slice(1, 2).concat(students.slice(3, 4))];
  let pair3 = [students.slice(2, 3).concat(students.slice(4, 5))];

  let res = pair1.concat(pair2, pair3);
  return res;
}

export default getPairs;