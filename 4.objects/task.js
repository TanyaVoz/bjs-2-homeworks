function Student(name, gender, age) { // функция конструктор 
  this.name = name;
  this.gender = gender;
  this.age = age;
}

const student1 = new Student('Roman', 'man', 18);// экземпляр объектa
const student2 = new Student('Sasha', 'man', 23);// экземпляр объектa
const student3 = new Student('Olga', 'woman', 22);// экземпляр объектa

Student.prototype.setSubject = function (subjectName) {//метод setSubject(subjectName), который при вызове будет устанавливать поле предмет subject экземпляра в subjectName
  this.subject = subjectName;
}

Student.prototype.addMark = function (mark) { //при вызове будет добавлять студенту оценку mark в свойство (массив) marks объекта.
  if (this.marks === undefined) { // проверка свойства
    this.marks = [mark];// добавить первую оценку 
  } else {
    this.marks.push(mark);// добавить вторую и последующие оценки в массив
  }
}

Student.prototype.addMarks = function (...marks) { //добавление нескольких оценок .
  if (this.marks === undefined) {
    this.marks = [...marks];
  } else {
    this.marks.push(...marks);
  }
}

Student.prototype.getAverage = function () {//метод getAverage() по аналогии с п.2, который при вызове будет возвращать среднее арифметическое оценок студента.
  let sum = 0;

  for (let i = 0; i < this.marks.length; i++) {
    sum += this.marks[i];
  }

  return sum / this.marks.length;
}

Student.prototype.exclude = function (reason) {// метод exclude(reason) по аналогии с п.2, который при вызове будет исключать студента из учебного процесса и устанавливать причину исключения.
  delete this.subject;
  delete this.marks;
  this.excluded = reason;
}