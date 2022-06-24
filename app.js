alert('Привет, пользователь');

let allUserList = [];

const startFuncbtn = document.querySelector('.btn');

function start() {
    userFunctionChoose = prompt('Выбери, что будет делать: \na) Зарегистрироваться\nб) Авторизироваться\nв) Просмотреть список всех пользователей\nг) Изменить данные пользователя\nд) Выйти');

    if (userFunctionChoose == 'а' || userFunctionChoose == 'Зарегистрироваться') {
        alert('Чтоб пройти регистрацию, укажите все данные, которые потребуются далее');
        register();

    } else if (userFunctionChoose == 'б' || userFunctionChoose == 'Авторизироваться') {
        logIn();
    } else if (userFunctionChoose == 'в' || userFunctionChoose == 'Просмотреть список всех пользователей') {
        
    } else if (userFunctionChoose == 'г' || userFunctionChoose == 'Изменить данные пользователя') {
        
    } else if (userFunctionChoose == 'д' || userFunctionChoose == 'Выйти') {
        alert('До скорого!');
    } else {
        alert('Ты ввел некорректное значение!');
        start();
    }
}

function register() {
    const userObj = {};

    userName = prompt('Введите ваше имя');
    userSurname = prompt('Введите вашу фамилию');

    function askUserAge(){
            userAge = +prompt('Введите ваш возраст');

            if (isNaN(userAge) || userAge == 0) {
                alert('Ты ввел некорректный возраст');
                askUserAge();
            }
            return userAge;
    }
    userAge = askUserAge();

    function askUserEmail() {
            userEmail = prompt('Введите ваш email');
            if (userEmail.indexOf('@') == -1) {
                alert('Ты ввел некорректный email!');
                askUserEmail();
            }
            return userEmail;
    }
    userEmail = askUserEmail();

    function askUserPassword() {
        userPassword = prompt('Введите ваш пароль');
        if (userPassword.length < 8){
            alert('Ты ввел некорректный пароль! Пароль должен быть минимум 8 символов');
            askUserPassword();
        }
        return userPassword;
    }
    userPassword = askUserPassword();

    userObj['name'] = userName;
    userObj['surname'] = userSurname;
    userObj['age'] = userAge;
    userObj['email'] = userEmail;
    userObj['password'] = userPassword;
    
    console.log(userObj);
    
    allUserList.push(userObj);
    console.log(allUserList);

    isRepeatReg();    
}

function isRepeatReg() {
    isRepeat = confirm('Добавим ещё одного пользователя?');
    if (isRepeat == true) {
        register();
    } else {
        start();
    }
}

function logIn() {
    console.log(allUserList);
}

function checkAllUser() {

}

function changeUserData() {

}

startFuncbtn.addEventListener('click', start);