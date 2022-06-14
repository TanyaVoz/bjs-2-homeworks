class AlarmClock {

    constructor() {
        this.alarmCollection = [];//свойство для хранения коллекции звонков
        this.timerId = null;//для хранения id таймера
    }

    addClock(time, callback, id) {// добавляет новый звонок в коллекцию существующих.
        if (!id) {//проверка
            throw new Error("Невозможно идентифицировать id");
        }

        if (this.alarmCollection.some((value) => value.id === id)) {
            console.error("Звонок  с таким id уже существует");
            return;
        }

        this.alarmCollection.push({//добавьте в массив звонков объект со свойствами id, time, callback
            time: time,
            callback: callback,
            id: id
        });
    }

    removeClock(id) {
        let index = this.alarmCollection.findIndex((item) => item.id === id);

        if (index !== -1) {//Удалите из массива звонков тот, у которого id совпадает с текущим.
            this.alarmCollection.splice(index, 1);
            return true;
        } else {
            return false;
        }
    }

    getCurrentFormattedTime() {//возвращает текущее время в строковом формате HH:MM
        return new Date().toLocaleTimeString("ru-Ru", {
            hour: "2-digit",
            minute: "2-digit",
        });
    }

    start() {
        function checkClock(alarm) {//принимает звонок и проверяет: если текущее время совпадает со временем звонка, то вызывайте колбек.
            if (alarm.time === this.getCurrentFormattedTime()) {
                alarm.callback();
            }
        }
        let checkClockBind = checkClock.bind(this);
        if (!this.timerId) {
            this.timerId = setInterval(() => this.alarmCollection.forEach((ring) => checkClockBind(ring)), 2000);
        }
    }

    stop() {// останавливает выполнение всех звонков
        if (this.timerId) {//проверка
            clearInterval(this.timerId);//вызовите функцию clearInterval для удаления интервала
            this.timerId = null;
        }
    }

    printAlarms() {//печатает все звонки
        this.alarmCollection.forEach((item) => console.log(item.id, item.time));
    }

    clearAlarms() {//удаляет все звонки
        this.stop();
        this.alarmCollection = [];
    }
}






