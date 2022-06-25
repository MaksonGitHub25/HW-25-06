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
        checkAllUsers();
    } else if (userFunctionChoose == 'г' || userFunctionChoose == 'Изменить данные пользователя') {
        changeUserData();
    } else if (userFunctionChoose == 'д' || userFunctionChoose == 'Выйти') {
        alert('До скорого!');
    } else {
        alert('Ты ввел некорректное значение!');
        start();
    }
}

function register() {
    const userObj = {};

    function askUserName() {
        userName = prompt('Введите ваше имя');
        if (userName == '') {
            alert('Ты не ввел имени!');
            askUserName();
        }
        return userName;
    }
    userName = askUserName();

    function askUserSurname() {
        userSurname = prompt('Введите вашу фамилию');
        if (userSurname == '') {
            alert('Ты не ввел имени!');
            askUserSurname();
        }
        return userSurname;
    }
    userSurname = askUserSurname();

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
            alert('Ты ввел некорректный пароль!\nПароль должен быть минимум 8 символов');
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
    console.log(`Был добавлен новый пользователь - ${userObj['surname']} ${userObj['name']}`);
    
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

function isRepeatLogIn() {
    isRepeat = confirm('Хотите авторизироваться под другим аккаунтом?');
    if (isRepeat == true) {
        logIn();
    } else {
        start();
    }
}

function isRepeatCheckAllUsers() {
    isRepeat = confirm('Хотите повторить перечисление?');
    if (isRepeat == true) {
        checkAllUsers();
    } else {
        start();
    }
}

function isRepeatChangeUserData() {
    isRepeat = confirm('Хотите изменить что-то ещё?');
    if (isRepeat == true) {
        changeUserData();
    } else {
        start();
    }
}

function logIn() { // fucking hard
    userLogInEmail = prompt('Введите ваш email');
    userLogInPassword = prompt('Введите ваш пароль');

    if (userLogInEmail == '' || userLogInPassword == '' || userLogInEmail.indexOf('@') == -1) {
        alert('Ты ввел некорректные значение!');
        logIn();
    }

    // var 1

    // allUserList.forEach(function (elem) {
    //     for (let key in elem) {
    //         let value = elem[key];
    //         let emailValue = elem['email'];
    //         let passwordValue = elem['password'];

    //         if (emailValue == userLogInEmail) {
    //             if (passwordValue == userLogInPassword) {
    //                 alert('Вы успешно авторизированы!');
    //                 console.log(`${key}: ${value}`);
    //             } else {
    //                 alert('Пользователей с такими данными не найдено!');
    //                 logIn();
    //             }
    //         } else {
    //             alert('Пользователей с такими данными не найдено!');
    //             logIn();
    //         }
    //     }
    // });


    //var 2
    
    // let trueUserEmail = '';
    // let trueUserPassword = '';

    // allUserList.forEach(function (elem) {
    //     for (let key in elem) {

    //         console.log(elem);
    //         console.log(key);

    //         trueUserEmail = elem['email'];
    //         trueUserPassword = elem['password'];
    //     }
    // });

    // if (trueUserEmail == userLogInEmail) {
    //     if (trueUserPassword == userLogInPassword) {
    //         alert('Вы успешно авторизированы!');
    //         allUserList.forEach(function (elem) {
    //             for (let key in elem) {
    //                 let value = elem[key];
    //                 console.log(`${key}: ${value}`);
    //             }
    //         });
    //     } else {
    //         alert('Пользователей с такими данными не найдено!');
    //         logIn();
    //     }
    // } else {
    //     alert('Пользователей с такими данными не найдено!');
    //     logIn();
    // }


    // var 3
    
    let isUserEmailTrue = false;
    let isUserPasswordTrue = false;
    let userIndex = 0;

    allUserList.forEach(function (elem, index) {
        for (let key in elem) {
            let value = elem[key];

            if (key == 'email' && value == userLogInEmail) {
                isUserEmailTrue = true;
            }
            if (isUserEmailTrue == true && key == 'password' && value == userLogInPassword) { //проверка isUserEmailTrue чтоб послать юзера если он ввел неправильно почту для проверки 
                isUserPasswordTrue = true;
                userIndex = index;
            }
        }
    });

    function checkAndCong() {
        if (isUserEmailTrue == true && isUserPasswordTrue == true) {
            alert('Вы успешно авторизованы!');
            console.log('---------------------------');
            console.log(`
            Ваши данные:
            `);
            
            for (let key in allUserList[userIndex]) {
                let value = allUserList[userIndex][key];
                
                console.log(`${key}: ${value}`);
            };
        } else {
            alert('Пользователя с такими данными не существует!');
            logIn();
        }
    }

    checkAndCong();

    isRepeatLogIn();
}

function checkAllUsers() {
    if (allUserList.length == 0) {
        alert('Пока что нету ни одного зарегистрированого пользователя!');
        start();
        return;
    } else {
        console.log(`На данный момент зарегистрировано ${allUserList.length} пользователей`);
        console.log('---------------------');
    }

    nameAlluser = [];

    allUserList.forEach(function (elem) {
        for (let key in elem) {
            let value = elem[key];
            if (key == 'name') {
                nameAlluser.push(value);
            }
        }
    });
    
    allUserList.forEach(function (elem, index) {
    console.log(`%cПользователь ${nameAlluser[index]}`, 'color: orange; font-weight: bold');
    console.log('---------');
        for (let key in elem) {
            let value = elem[key];
            console.log(`${key}: ${value}`);
        }
        console.log('---------------------');
    });

    isRepeatCheckAllUsers();
}

function changeUserData() {
    userObjIndex = +prompt('Какого пользователя будем менять?(числом)');
    userChangeKey = prompt('Какой пункт ты хочешь изменить?(name, surname, age, email, password)');
    userChangeValue = prompt('На что ты хочешь заменить данный пункт?');
    
    if (userObjIndex > allUserList.length || userObjIndex == 0 || isNaN(userObjIndex)) {
        alert('Ты выбрал несуществующего пользователя');
        changeUserData();
    } else {
        if (
            userChangeKey === 'name' ||
            userChangeKey === 'surname' ||
            userChangeKey === 'age' ||
            userChangeKey === 'email' ||
            userChangeKey === 'password' ||
            !userChangeKey === ''
        ) {
            let obj = allUserList[userObjIndex-1];
            obj[userChangeKey] = userChangeValue;
        
            console.log(allUserList);
        } else {
            alert('Ты ввел некорректный пункт!');
            changeUserData();
        }
    }
    isRepeatChangeUserData();
}

startFuncbtn.addEventListener('click', start);