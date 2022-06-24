alert('Привет, пользователь');

const startFuncbtn = document.querySelector('.btn');

function start() {
    userFunctionChoose = prompt('Выбери, что будет делать: \na) Зарегистрироваться\nб) Авторизироваться\nв) Просмотреть список всех пользователей\nг) Изменить данные пользователя\nд) Выйти');

    if (userFunctionChoose == 'а' || userFunctionChoose == 'Зарегистрироваться') {
        
    } else if (userFunctionChoose == 'б' || userFunctionChoose == 'Авторизироваться') {

    } else if (userFunctionChoose == 'в' || userFunctionChoose == 'Просмотреть список всех пользователей') {

    } else if (userFunctionChoose == 'г' || userFunctionChoose == 'Изменить данные пользователя') {

    } else if (userFunctionChoose == 'д' || userFunctionChoose == 'Выйти') {
        alert('До скорого!');
    } else {
        alert('Ты ввел некорректное значение');
        start();
    }
}

function register() {

}

function logIn() {

}

function checkAllUser() {

}

function changeUserData() {

}

startFuncbtn.addEventListener('click', start);