//break
/*
for (i=0; i<10; i++) {
    console.log("i= "+i);
    if(i==5) break;
  }

 //continue
 console.log("----------------------------------");
 for (i=0; i<10; i++) {
    if(i % 2 == 0) continue;
    console.log("i= "+i); 
  }



  console.log("----------------------------------");
 for (i=0; i<10; i++) {
    if(!(i % 2 == 0)) { - // вывожу само число, а не остаток
        console.log("i= "+i); 
    }
  }

  for (let i = 0; i < 5; i++) {
      alert(i); //0, 1, 2, 3, 4. - true ; 5 - false.
  }
  let i = 0;

  if (i<5) {
      alert(i);
      i++
  }/
  console.log("----------------------------------");
  for (i = 2; i<=10; i++) {
      if(i%2==1) {
          console.log("i= "+i);
      }
  }   
//
  for (let i = 0; i < 3; i++) {
    alert( `number ${i}!` );
  }
  
  let i = 0;

  while(i<3) {
    alert( `number ${i}!` );
    i++
  }


let i=0;

while (i<10) { - 
    i++;
    console.log ("i= ", +i); //перед выводом в консоль проверит i<10 и только потом решит выводить или нет.
}

let i=0;

do {
    i++;
    console.log ("i= ", +i); //сначала в любом случае выполнит хоть одну операцию, а потом только проверит i<10.
}
while (i<10) */

/*const en = "Английский";
const ru = "Русский";

const array = ["Английский", "Русский"]; // Массив [0,1,2] соответственно
//array[100] = "Белорусский";
//array[`tes`] = "Украинский";
//const array = [1, true, []];

//console.log(array[`length`]); 
//console.log(array.length); // длина массива
//console.log(typeof array); // тип массива
//console.log(array[1]); // конкретный индекс элемента 
console.log(array);*/


/*const arr = [1, 0, 55, 10, 531, 12, 15]; // 0,1,2,3,4,5,6

//let i = 0;
//for (let i=0; i < array.length; i++ ) {
/*if (array[i]===55){
    break; // когда хотим выйти из цикла
}*/
/* if (array[i]===55) {
     continue; // можем просто пропустить итерацию  ====55
 }*/
//console.log (array[i]);
//}   

//let i = 0; // условие

/*while(i<arr.length) {  // length = 7
    break; 
    continue;
    console.log(arr[i]);
    i++;
}*/

/*while (i<0) { // проверяет условия
    console.log (`test`); // выполняет код внутри
}

do {
    console.log (`test2`); // выполняет код внутри
}  while (i<0); // проверяет условия

console.log(`end`);*/


//const name = `Kate`;

/*if (name===`Alex`) {
  console.log (`Привет, Alex`);
}
else if (name===`John`) {
  console.log (`Привет, John`);
}
else if (name===`Kate`) {
  console.log (`Привет, John`);
}
else {
  console.log (`Привет`);
}*/

// if...else = switch

/*switch(name) {
      case `Alex`: {
          const a = 10;
          console.log (`Привет, Alex`);
          break;
      }
      case `John`:
        console.log (`Привет, John`); 
        break; 
      case `Kate`:
        console.log (`Привет, Kate`);
        break;
      default:
        console.log (`Привет`);    
}*/

/*Напишите if..else, соответствующий следующему switch:

switch (browser) {
    case 'Edge':
      alert( "You've got the Edge!" );
      break;
  
    case 'Chrome':
    case 'Firefox':
    case 'Safari':
    case 'Opera':
      alert( 'Okay we support these browsers too' );
      break;
  
    default:
      alert( 'We hope that this page looks ok!' );
  }*/

/*let browser;

if (browser==='Edge') {
    console.log( "You've got the Edge!" );
}
else if (browser==='Chrome') {
    console.log( 'Okay we support these browsers too' );
}
else if (browser==='Firefox') {
    console.log( 'Okay we support these browsers too' );
}
else if (browser==='Safari') {
    console.log( 'Okay we support these browsers too' );
}
else if (browser==='Opera') {
    console.log( 'Okay we support these browsers too' );
}
else {
    console.log( 'We hope that this page looks ok!' );
}

let browser;

if (browser==='Edge') {
    console.log( "You've got the Edge!" );
}
else if (browser==='Chrome'
|| browser==='Firefox'
|| browser==='Safari'
|| browser==='Opera') {
    console.log( 'Okay we support these browsers too' );
}
else {
    console.log( 'We hope that this page looks ok!' );
}*/


//Перепишите код с использованием одной конструкции switch:

//const number = +prompt('Введите число между 0 и 3', '');

/*if (number === 0) {
  alert('Вы ввели число 0');
}

if (number === 1) {
  alert('Вы ввели число 1');
}

if (number === 2 || number === 3) {
  alert('Вы ввели число 2, а может и 3');
}*/



/*switch(number) {
    case `0`:
        console.log ('Вы ввели число 0');
        break;
    case `1`:
        console.log ('Вы ввели число 1');
        break;
    case `2` :
    case `3` :
        console.log ('Вы ввели число 2, а может и 3');
        break;
}*/

// Какая итоговая сумма за весь товар?

/*const cart =[{
    name: `Арбуз`,
    price: 100,
    count: 1,
  }, {
    name: `Хлеб`,
    price: 10,
    count: 2,
  }, {
    name: `Молоко`,
    price: 50,
    count: 1,
  }];
  
  let finalPrice = 0;*/
  
  /*for (i=0; i<cart.length; i++){
    const product = cart[i];   // массив cart[i] = массив Арбуз + массив Хлеб + массив Молоко
  
    finalPrice += product.price * product.count; // цены всех продуктов * кол-во всех продуктов  = итог сумма за общее кол-во продуктов
  
  }
  
  console.log(finalPrice);*/


  const name = `Alex`;
  let final = 0;

  if (name === `Alex`) {
      const product = creatProduct(`Арбуз`, 100, 1);
      const alexCart = [product];

      console.log(alexCart);

      const debt = 150;
      
      final = calculateFinalPrice(alexCart); // Отработка функции для вывода в консоль
      final += debt;

      
  }
  else if (name === `John`) {
    const product = creatProduct(`Хлеб`, 20, 2);
      const johnCart =[product];

      console.log(johnCart);

      const debt = 50;
      
      final = calculateFinalPrice(johnCart); // Отработка функции для вывода в консоль
      final += debt;
  }
  
  else {
    const product = creatProduct(`Молоко`, 50, 1);
    const userCart =[product];

    console.log(userCart);

    final = calculateFinalPrice(alexCart); // Отработка функции для вывода в консоль

    
}

  function creatProduct(name, price,count) {
      if (name=== '') {
          name = 'Неизвестный продукт';
          console.log('Вы задали неправильное имя продукта');
      }
      if (typeof price !=='number') {
        price = 0;
        console.log('Вы задали неправильно цену');
      }
      if(typeof count !== 'number'){
        count = 0;
        console.log('Вы задали неправильное количество');
      }
      return {
          name,
          price,
          count,
      }
  }
  console.log(creatProduct);


  /*function calculateFinalPrice (cart) { // аргументы name, age, array
      let finalPrice = 0;

    for (let i=0; i < cart.length; i++) {
        const product = cart[i];  
  
        finalPrice += (product.price * product.count); // посчитает финальную цену
    }
    return finalPrice; // результат работы нашей функции
  }*/
  //calculateFinalPrice(`Alex`, 12, [12,12,12]); // название аргументов - `Alex`, 12, [12,12,12]
  
  
  
  
  //const result = calculateFinalPrice(); // после отработки ф-ции, запись результата 
  //console.log(result);
  // или снизу второй вариант, более лаконичный
  //console.log(calculateFinalPrice); // после обработки, запись и вывод результата