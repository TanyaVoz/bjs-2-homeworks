//з1
function parseCount(value) {
    let number = Number.parseInt(value);

    if (isNaN(number)) {//Если результатом парсинга является значение NaN, то выбрасывайте исключение с ошибкой "Невалидное значение".
        throw new Error("Невалидное значение");
    }

    return number;//результат парсинга из функции.
}