//з1
class PrintEditionItem {
    constructor(name, releaseDate, pagesCount) {
        this.name = name;
        this.releaseDate = releaseDate;
        this.pagesCount = pagesCount;
        this.type = null;
        this.state = 100;
    }

    fix() {
        this.state *= 1.5;//метод fix(), увеличивающий state в полтора раза
    }

    set state(value) {//«сеттер» для свойства state, принимающий в качестве аргумента новое состояние печатного издания (число)
        if (value < 0) {
            return this._state = 0;
        } else if (value >= 100) {
            return this._state = 100;
        } else {
            return this._state = value;
        }
    }
    get state() {
        return this._state;//Создайте «геттер», который позволит читать значение свойства state
    }
}

class Magazine extends PrintEditionItem {
    constructor(name, releaseDate, pagesCount, state) {
        super(name, releaseDate, pagesCount, state);
        this.type = 'magazine';
    }
}

class Book extends PrintEditionItem {
    constructor(author, name, releaseDate, pagesCount, state) {
        super(name, releaseDate, pagesCount, state);
        this.author = author;
        this.type = 'book';
    }
}
class NovelBook extends Book {//Создайте классы NovelBook для романов
    constructor(author, name, releaseDate, pagesCount, state) {
        super(author, name, releaseDate, pagesCount, state);
        this.type = 'novel';
    }
}

class FantasticBook extends Book {//Создайте классы FantasticBook
    constructor(author, name, releaseDate, pagesCount, state) {
        super(author, name, releaseDate, pagesCount, state);
        this.type = 'fantastic';
    }
}

class DetectiveBook extends Book {//Создайте классы DetectiveBook
    constructor(author, name, releaseDate, pagesCount, state) {
        super(author, name, releaseDate, pagesCount, state);
        this.type = 'detective';
    }
}


//з2

class Library {
    constructor(name) {//Конструктор класса должен принимать название библиотеки name (строка). Значением свойства books должен быть пустой массив.
        this.name = name;
        this.books = [];
    }

    addBook(book) {//Реализуйте метод addBook(book), который будет в качестве аргумента принимать объект (книгу или журнал) и добавлять книгу в хранилище books, только если состояние state книги больше 30
        if (book.state > 30) {
            this.books.push(book);
        }
    }

    findBookBy(type, value) {//поиск книги
        let keybooks = this.books.find(item => value === item[type]);
        if (keybooks) {
            return keybooks;
        } else {
            return null;
        }
    }
    giveBookByName(bookName) {
        let indexBook = this.books.findIndex((item) => item.name === bookName);
        if (indexBook != -1) {
            return this.books.splice(indexBook, 1)[0];//удаление книги из хранилища
        } else {
            return null;
        }
    }

}


//з3
class Student {
    constructor(name) {
        this.name = name;
        this.marks = [];
    }

    addMark(mark, subject) {
        if (!(subject in this.marks)) {
            this.marks[subject] = [];
        }

        if (mark <= 5) {
            this.marks[subject].push(mark);
        } else {
            return "Ошибка, оценка должна быть числом от 1 до 5";
        }
    }

    getAverageBySubject(subject) {
        for (let key in this.marks) {
            if (key === subject) {
                return (this.marks[subject].reduce((sum, current) => sum + current, 0)) / this.marks[subject].length;
            }
        }
        return "Несуществующий предмет";
    }


    getAverage() {
        let sum = 0;
        let sumlengths = 0;
        for (let key in this.marks) {
            sum += this.marks[key].reduce((sum, current) => sum + current, 0)
            sumlengths += this.marks[key].length;
        }
        return sum / sumlengths;

    }

    exclude(deleteStudent) {
        if (deleteStudent === "Исключен за попытку подделать оценки") {
            for (let student in this) delete this[student];
        }
    }
}
