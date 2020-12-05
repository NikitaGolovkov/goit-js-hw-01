const userPassword = prompt('Введите пароль');
const ADMIN_PASSWORD = 'jqueryismyjam';
    let message;
if (userPassword === ADMIN_PASSWORD) {
    message = 'Добро пожаловать!'
} else if (userPassword === null) {
    message = 'Отменено пользователем!'
} else {
    message = 'Доступ запрещен, неверный пароль!'
}

console.log(message);
