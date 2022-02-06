"use strict";

const China = "china";
const chinaPrice = 100;
const Chili = "chili";
const chiliPrice = 250;
const Australia = "australia";
const australiaPrice = 170;
const indiaPrice = 80;
const India = "india";
const jamaicaPrice = 120;
const Jamaica = "jamaica";
let message;

const userCountry = prompt("Выбирайте страну доставки");

const lowUserCountry = userCountry.toLowerCase();

let price = null;

switch (lowUserCountry) {
  case China:
      price = chinaPrice;
    message = `Доставка в ${userCountry} будет стоить ${chinaPrice} кредитов`;
    break;
  case Chili:
    message = `Доставка в ${userCountry} будет стоить ${chiliPrice} кредитов`;
    break;
  case Australia:
    message = `Доставка в ${userCountry} будет стоить ${australiaPrice} кредитов`;
    break;
  case India:
    message = `Доставка в ${userCountry} будет стоить ${indiaPrice} кредитов`;
    break;
  case Jamaica:
    message = `Доставка в ${userCountry} будет стоить ${jamaicaPrice} кредитов`;
    break;
  default:
    message = "В вашей стране доставка не доступна";
}

message = `Доставка в ${userCountry} будет стоить ${price} кредитов`;

console.log(message);
