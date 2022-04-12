// Этот код используется в строгом режиме
"use strict";

alert("Привет");

alert("Мир");

let user1 = "John";
let age23 = 25;
let message12 = "Hello";
message12 = "Hellow";
let myVelyLong = "Vityaz";
let user123 = "123";
let _ = "3";
let $ = "4";
alert("_+$"); //7

alert("age"); 




let admin, name23, user23;
user23 = "John";
admin = user23;
alert( admin );  


/*const myBirthday = "16.01.1986"; - правильное
myBirthday = "19.02.2090"; - неправильное*/

const COLOR_RED = "#F00";
const COLOR_GREEN = "#0F0";
const COLOR_BLUE = "#00F";
const COLOR_ORANGE = "#FF7F00";

// ...когда нам нужно выбрать цвет
let color = COLOR_ORANGE;
alert(color); // #FF7F00

let ourPlanetName = "Земля";
let currentUserName = "Джон";
let mainUserName = "Мария";

/*const BIRTHDAY = '18.04.1982'; 

const AGE = first(BIRTHDAY); */

/*Типы данных*/
/*Динамическая типизация - типы данных есть, но переменные не привязаны ни к одному из них*/
let message = "12345";
message = "User";

/*Число*/
let n = "12345";
n = "12.345";
alert (1/0); // (1/0 = Infinity) - бесконечность
alert ("не число"/ 2+5); //Nan - мат ошибка
/*const bigInt = 1234567890123456789012345678901234567890n;  bigInt - это тип, который дает прописывать огроменные числа с n в конце*/


/*Строка*/
/*let str0 = "Привет";
let str1 = `${str}`; //Обратные кавычки позволяют встраивать переменные `${str}`;*/
let name123 = "Иван";
alert ( `Привет, ${name123}!` );
alert (`результат: ${1+2}`);
alert (`вывод: ${250+250}`);

/*Булевый логический тип*/
//Булевый тип (boolean) может принимать только два значения: true (истина) и false (ложь).
let isGreater = 5 > 1;
alert(isGreater); // true - результатом сравнения будет да

/*Спец значение null - представляет собой «ничего», «пусто» или «значение неизвестно»*/
let age1 = null; // Значение неизвестно

/*Специальное значение undefined - значение не было присвоено; undefined – для проверок, была ли переменная назначена.*/
let ag1e = 123;
ag1e = undefined;
alert (ag1e);

/*Оператор typeof позволяет нам увидеть, какой тип данных сохранён в переменной.
Имеет две формы: typeof x или typeof(x).*/

let name = "Ilya";

alert(`hello ${1}`);
alert(`hello ${"name"}`);
alert (`hello ${name}`);

/*Взаимодействие: alert, prompt, confirm*/
/*Функция prompt принимает два аргумента:
title - Текст для отображения в окне.
default - Необязательный второй параметр, 
который устанавливает начальное значение в поле для текста в окне.
result = prompt(title, [default]);*/
let age = prompt(`Сколько тебе лет?`, 100);
alert (`Тебе ${age}лет!`); // Тебе 100 лет! 

/*Функция confirm отображает модальное окно с текстом вопроса question и двумя кнопками: OK и Отмена.
Результат – true, если нажата кнопка OK. В других случаях – false.
result = confirm(question);*/
let isBoss = confirm("Ты здесь главный?");
alert(isBoss); //true - если нажата ОК


let name1231 = prompt("Ваше имя?", "");
alert(name1231);






