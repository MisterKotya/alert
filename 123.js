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


const arr = [1, 0, 55, 10, 531, 12, 15]; // 0,1,2,3,4,5,6

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

let i = 0; // условие

/*while(i<arr.length) {  // length = 7
    break; 
    continue;
    console.log(arr[i]);
    i++;
}*/

while (i<0) { // проверяет условия
    console.log (`test`); // выполняет код внутри
}

do {
    console.log (`test2`); // выполняет код внутри
}  while (i<0); // проверяет условия

console.log(`end`);

