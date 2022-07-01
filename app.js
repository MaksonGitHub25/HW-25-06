alert('Привет, пользователь');
const startFuncbtn = document.querySelector('.btn');

let allUserList = [];

function userChangeFunctionHandler() {
    userFunctionChoose = prompt('Выбери, что будет делать: \na) Зарегистрироваться\nб) Авторизироваться\nв) Просмотреть список всех пользователей\nг) Изменить данные пользователя\nд) Выйти');

    if (userFunctionChoose.toLowerCase() == 'а' || userFunctionChoose == 'Зарегистрироваться') {
        alert('Чтоб пройти регистрацию, укажите все данные, которые потребуются далее');
        register();
    } else if (userFunctionChoose.toLowerCase() == 'б' || userFunctionChoose == 'Авторизироваться') {
        logIn();
    } else if (userFunctionChoose.toLowerCase() == 'в' || userFunctionChoose == 'Просмотреть список всех пользователей') {
        checkAllUsers();
    } else if (userFunctionChoose.toLowerCase() == 'г' || userFunctionChoose == 'Изменить данные пользователя') {
        changeUserData();
    } else if (userFunctionChoose.toLowerCase() == 'д' || userFunctionChoose == 'Выйти') {
        alert('До скорого!');
    } else {
        alert('Ты ввел некорректное значение!');
        userChangeFunctionHandler();
    }
}

function isRepeatFunction(text, repeatFunc) {
    isRepeat = confirm(text);
    if (isRepeat == true) {
        repeatFunc();
    } else {
        userChangeFunctionHandler();
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
    
    console.log(`Был добавлен новый пользователь - ${userObj['surname']} ${userObj['name']}`);
    
    allUserList.push(userObj);
    console.log(allUserList);

    isRepeatFunction('Добавим ещё одного пользователя?', register);    
}

function logIn() {
    userLogInEmail = prompt('Введите ваш email');
    userLogInPassword = prompt('Введите ваш пароль');

    if (userLogInEmail == '' && userLogInPassword == '' && userLogInEmail.indexOf('@') == -1) {
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
    
    function checkAndPrintUserData() {
        if (isUserEmailTrue == true && isUserPasswordTrue == true) {
            alert('Вы успешно авторизованы!');
            console.log('---------------------------');
            console.log(`
            Ваши данные:
            `);
            
            userInList = allUserList[userIndex];
            
            for (let key in userInList) {
                let value = userInList[key];
                
                console.log(`${key}: ${value}`);
            };
            
            isRepeatFunction('Хотите авторизироваться под другим аккаунтом?', logIn);
        } else {
            alert('Пользователя с такими данными не существует!');
            logIn();
        }
    }
    
    checkAndPrintUserData();
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

    isRepeatFunction('Хотите повторить перечисление?', checkAllUsers);
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
    isRepeatFunction('Хотите изменить что-то ещё?', changeUserData);
}

startFuncbtn.addEventListener('click', userChangeFunctionHandler);