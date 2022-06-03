//з1
function parseCount(value) {
    let number = Number.parseInt(value);

    if (isNaN(number)) {//Если результатом парсинга является значение NaN, то выбрасывайте исключение с ошибкой "Невалидное значение".
        throw new Error("Невалидное значение");
    }

    return number;//результат парсинга из функции.
}

function validateCount(value) {
    try {
        return parseCount(value);
    } catch (err) {
        return err;//ошибку из функции в случае перехвата исключения
    }
}

//з2
class Triangle {
    constructor(a, b, c) {// 3 стороны
        this.a = a;
        this.b = b;
        this.c = c;

        if (a + b < c || b + c < a || a + c < b) {
            throw new Error("Треугольник с такими сторонами не существует");
        }
    }

    getPerimeter() {  // периметр треугольника.
        return this.a + this.b + this.c;
    }

    getArea() {
        let half = 0.5 * this.getPerimeter();
        let S = Math.sqrt(half * (half - this.a) * (half - this.b) * (half - this.c));// формулa Герона.

        return + S.toFixed(3);
    }
}

function getTriangle(a, b, c) {
    try {
        return new Triangle(a, b, c);//объект треугольника
    } catch (err) {//перехвата исключения
        return {
            getArea() {
                return "Ошибка! Треугольник не существует";
            },
            getPerimeter() {
                return "Ошибка! Треугольник не существует";
            }
        }
    }
}
