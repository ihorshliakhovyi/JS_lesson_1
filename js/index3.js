'use strict'

const ADMIN_PASSWORD = 'jqueryismyjam';


let message;

const userChoice = prompt('Введите пароль администратора');


if (ADMIN_PASSWORD === userChoice) {
    message = '"Добро пожаловать!"';
} else if (userChoice == null) {
    message = '"Отменено пользователем!"';
} else {
    message = '"Доступ запрещен, неверный пароль!"';
}

console.log(message);
