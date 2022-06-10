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

class FantasticBook extends Book {//Создайте классы NovelBook для романов
    constructor(author, name, releaseDate, pagesCount, state) {
        super(author, name, releaseDate, pagesCount, state);
        this.type = 'fantastic';
    }
}

class DetectiveBook extends Book {//Создайте классы NovelBook для романов
    constructor(author, name, releaseDate, pagesCount, state) {
        super(author, name, releaseDate, pagesCount, state);
        this.type = 'detective';
    }
}