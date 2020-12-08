const orderDroids = prompt('Количесво товара');
const CANCELED_BY_USER = 'Отменено пользователем!';

let message;
if (orderDroids === null) {
    message = CANCELED_BY_USER;
}

const credits = 23580;
const pricePerDroid = 3000;


let totalPrice = pricePerDroid * orderDroids; // Write code on this line
let balanceCredit = credits - totalPrice;
let payExtra = totalPrice - credits;
const ACCESS_DENIED = `Недостаточно средств на счету! 
    Ваш баланс ${credits}. 
    Сумма покупки ${totalPrice}.
    Необходимо дополнительно внести ${payExtra}`;

if (credits >= totalPrice) {
    message = `Вы купили ${orderDroids} дроидов, на счету осталось ${balanceCredit} кредитов`;
} else {
    alert (message = ACCESS_DENIED);
}

console.log(message);