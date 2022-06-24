alert('Привет, пользователь');

const startFuncbtn = document.querySelector('.btn');

function start() {
    userFunctionChoose = prompt('Выбери, что будет делать: \na) Зарегистрироваться\nб) Авторизироваться\nв) Просмотреть список всех пользователей\nг) Изменить данные пользователя\nд) Выйти');

    if (userFunctionChoose == 'а' || userFunctionChoose == 'Зарегистрироваться') {
        allUserList = register();
    } else if (userFunctionChoose == 'б' || userFunctionChoose == 'Авторизироваться') {
        
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
    let allUserList = [];
    let userObj = {};
    alert('Чтоб пройти регистрацию, укажите все данные, которые потребуются далее');
    while (true) {
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

        isRepeat = confirm('Добавим ещё одного пользователя?');

        if (isRepeat == true) {
            register();
        } else {
            break;
        }
    }
    console.log(allUserList);

    return allUserList;
}

function logIn() {

}

function checkAllUser() {

}

function changeUserData() {

}

startFuncbtn.addEventListener('click', start);