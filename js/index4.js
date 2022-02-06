"use strict";

let credits = 23580;
let pricePerDroid = 3000;
let message;
let totalPrice;

const DroidAmmount = prompt(
  "Выберите количество дроидов, которых хотите купить"
);

const NumDroidAmmount = Number(DroidAmmount);

if (DroidAmmount == null) {
  message = "Отменено пользователем!";
} else {
    totalPrice = NumDroidAmmount * pricePerDroid;
    if (totalPrice > credits) {
        message = 'Недостаточно средств на счету!'
    } else {
        message = `Вы купили ${NumDroidAmmount} дроидов, на счету осталось ${credits - totalPrice} кредитов.`
    }
}



console.log(message);