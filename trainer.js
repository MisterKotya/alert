/*Используя конструкцию if..else, напишите код, который будет спрашивать: „Какое «официальное» название JavaScript?“

Если пользователь вводит «ECMAScript», то показать: «Верно!», в противном случае – отобразить: «Не знаете? ECMAScript!»

let nameJS = propmpt(`Какое «официальное» название JavaScript?`, '');

if (nameJS == ECMAScript) {
    alert(`Верно!`);
}
else {
    alert(`Не знаете? ECMAScript!`);
}

Используя конструкцию if..else, напишите код, который получает число через prompt, а затем выводит в alert:

    1, если значение больше нуля,
    -1, если значение меньше нуля,
    0, если значение равно нулю.

Предполагается, что пользователь вводит только числа.

let number = prompt(`Какое число?`, 0);

if (number>0) {
    alert(1);
}
else (number<0) {
    alert(-1);
}
else {
    alert(0);
}

let result;

if (a + b < 4) {
  result = 'Мало';
} else {
  result = 'Много';
}

result=(a + b < 4) ? 'Мало':
'Много';

let message;

if (login == 'Сотрудник') {
  message = 'Привет';
} 
else if (login == 'Директор') {
  message = 'Здравствуйте';
} 
else if (login == '') {
  message = 'Нет логина';
} 
else {
  message = '';
}

message = (login == 'Сотрудник') ? 'Привет':
(login == 'Директор') ? 'Здравствуйте':
(login == '') ? 'Нет логина':
'';

Напишите условие if для проверки, что переменная age находится в диапазоне между 14 и 90 включительно.

«Включительно» означает, что значение переменной age может быть равно 14 или 90.


if (age >= 14 && age<=90)


Напишите условие if для проверки, что значение переменной age НЕ находится в диапазоне 14 и 90 включительно.

Напишите два варианта: первый с использованием оператора НЕ !, второй – без этого оператора.


if(!age >= 14 && !age <= 90)
if (age < 14 || age > 90)  - находится в диапазоне меньше 14 или больше 90

Напишите код, который будет спрашивать логин с помощью prompt.

Если посетитель вводит «Админ», то prompt запрашивает пароль, если ничего не введено или нажата клавиша Esc – показать «Отменено», в противном случае отобразить «Я вас не знаю».

Пароль проверять так:

    Если введён пароль «Я главный», то выводить «Здравствуйте!»,
    Иначе – «Неверный пароль»,
    При отмене – «Отменено».

 let login = prompt(`Кто там?`, ``);
 
 if (login == `Админ`) {
    let pass = prompt(`Пароль?`, ``);
    if (pass==`Я главный`) {
        alert(`Здравствуйте!`);
    }
    else if (pass==`` || pass == null) {
        alert(`Отменено`);
    }
    else {
        alert(`Неверный пароль`);
    }
 }
 else if (login=='' || login == null) {
        alert(`Отменено`);
 }
 else  {
        alert(`Я вас не знаю`);
 }
 Напишите код, который будет спрашивать логин с помощью prompt.

 Если посетитель вводит «Админ», то prompt запрашивает пароль, если ничего не введено или нажата клавиша Esc – показать «Отменено», в противном случае отобразить «Я вас не знаю».
 
 Пароль проверять так:
 
     Если введён пароль «Я главный», то выводить «Здравствуйте!»,
     Иначе – «Неверный пароль»,
     При отмене – «Отменено».
     Подсказка: передача пустого ввода в приглашение prompt возвращает пустую строку ''. Нажатие клавиши Esc во время запроса возвращает null.

     let login = prompt(`Кто там?`, '');

     if (login == `Админ`) {
         let pass = prompt (`Пароль?`, '');
         if (pass==`Я главный`) {
             alert(`Здравствуйте!`);
         }
         else if (pass=='' || pass==null) {
             alert(`Отменено`);
         }
         else {
             alert(`Неверный пароль`);
         }
     }
     else if (login == '' || login==null) {
         alert(`Отменено`);
     }
     else {
         alert(`Я вас не знаю`);
     }

     Напишите цикл, который предлагает prompt ввести число, большее 100. Если посетитель ввёл другое число – попросить ввести ещё раз, и так далее.

Цикл должен спрашивать число пока либо посетитель не введёт число, большее 100, либо не нажмёт кнопку Отмена (ESC).

Предполагается, что посетитель вводит только числа. Предусматривать обработку нечисловых строк в этой задаче необязательно.

let num // проверка условия это цикл do{...}while

do{
    num = prompt("Введите число больше 100?", 0);
}
while (num <= 100 && num);


Натуральное число, большее 1, называется простым, если оно ни на что не делится, кроме себя и 1.

Другими словами, n > 1 – простое, если при его делении на любое число кроме 1 и n есть остаток.

Например, 5 это простое число, оно не может быть разделено без остатка на 2, 3 и 4.

Напишите код, который выводит все простые числа из интервала от 2 до n.

Для n = 10 результат должен быть 2,3,5,7.

P.S. Код также должен легко модифицироваться для любых других интервалов.


let n = 10;

nextPrime:
for (let i = 2; i <= n; i++) { // Для всех i...

    for (let j = 2; j < i; j++) { // проверить, делится ли число..
      if (i % j == 0) continue nextPrime; // не подходит, берём следующее
    }
  
    alert( i ); // простое число
  }*/


  

  //showHello();
  //showHello();
 


  function calcTest () {
      const x = 5;
      const y = 10;
      console.log(x+y);
  }

  function showHello () {
    console.log('Hello');
    calcTest();    
  }
function calcTest2 () {
    function t3() {
        console.log('t3 function');
    }
    t3();
    console.log('test calcTest2');
}


showHello();
calcTest2 ();
//t3(); !Error
