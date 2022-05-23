"use strict";
function solveEquation(a, b, c) {

  let arr;
  let discriminant = b ** 2 - 4 * a * c;


  if (discriminant < 0) {
    arr = [];
  } else if (discriminant === 0) {
    arr = [-b / (2 * a)];
  } else {
    arr = [(-b + Math.sqrt(discriminant)) / (2 * a), (-b - Math.sqrt(discriminant)) / (2 * a)];
  }


  return arr; // array
}




function calculateTotalMortgage(percent, contribution, amount, date) {
  let totalAmount;

  let percentValue = parseInt(percent);
  let contributionValue = parseInt(contribution);
  let amountValue = parseInt(amount);


  if (Number.isNaN(percentValue)) {
    return (`Параметр "Процентная ставка" содержит неправильное значение "${percent}"`);// контроль корректности введенных данных
  }
  if (Number.isNaN(contributionValue)) {
    return `Параметр "Начальный взнос" содержит неправильное значение "${contribution}"`;// контроль корректности введенных данных
  }
  if (Number.isNaN(amountValue)) {
    return `Параметр "Общая стоимость" содержит неправильное значение "${amount}"`;// контроль корректности введенных данных
  }

  let creditBody = amountValue - contributionValue; // тело кредита(сумма к возврату)


  ///определяем кол-во мес (период)
  let Today = Date.now();
  let endDate = date.getTime();
  let diffirenceInMonth;

  function creditPeriod() {
    diffirenceInMonth = Math.round((endDate - Today) * (3.8 * (10 ** -10)));
    return diffirenceInMonth;
  }

  creditPeriod(Today, endDate)


  let P = percentValue / 12 / 100;//процентная ставка расчет
  let sumMonth = creditBody * (P + (P / (((1 + P) ** diffirenceInMonth) - 1))); //Ежемесячная оплата 
  totalAmount = +(sumMonth * diffirenceInMonth).toFixed(2);//сумма, которую придется заплатить клиенту и округление до двух значений после запятой



  console.log(totalAmount);
  return totalAmount;
}
