//***1***
// Робота зі змінними
// Оголосіть дві змінні: name та city.
// Присвойте значення "Іван" змінній name.
// Скопіюйте значення зі змінної name в city.
// Виведіть значення змінної city, використовуючи функцію console.log (яка повинна показати “Іван”).

// const name = "Іван"
// const city = name

// console.log(city);

//***2***
//Який буде результат виконання скрипта?
// let name = "Olga";
// console.log(`привіт ${1}`); // привіт 1
// console.log(`привіт ${"name"}`); // привіт name
// console.log(`привіт ${name}`); // привіт Olga

//***3***
//Видобути число зі змінних
// let a = "5";
// let b = "13cvb";
// let c = "12.9sxdcfgv";

// Number.parseInt(a)
// Number.parseInt(b)
// Number.parseFloat(c)

// // вивести в консоль тип

// console.log(typeof Number(a))
// console.log(typeof Number(b))
// console.log(typeof Number(c))

//***4***
//Зробіть, щоб 0.1 + 0.2 = 0.3

// console.log((0.1 * 10 + 0.2 * 10) / 10);

//***5**
//Поверніть найбільше число с набору 20, 10, 50, 40

// const maxNumber = Math.max(20, 10, 50, 40)

// console.log(maxNumber); //50

//***6**
//Поверніть випадкове число в діапазоні від 2 до 4

// const rundomNum = Math.random() * (4 - 2) + 2

// console.log(rundomNum)

//***7**
//дізнатись довжину message
// const message = "Welcome to Bahamas!";

// console.log(message.length); //19

//***8**
//вивести в консоль message  великими літерами
// const message = "Welcome to Bahamas!";
// console.log(message.toUpperCase()); //WELCOME TO BAHAMAS!

//***9**
// створити пустий об*єкт
// додати туди ім*я, вік і місто
// вивести результат в консоль
// видалити місто
// додати буль з ключем: like flowers
// вивести результат в консоль

// const someObj = {}

// someObj.name = "Alex"
// someObj.age = 37
// someObj.city = "Odesa"

// console.log(someObj);

// delete someObj.age

// someObj["like flowers"] = true

// console.log(someObj);

//***10**
// За допомогою циклу  “for…in” вивести в консоль ключі і значення об*єкта

// for (let key in someObj) {
//   console.log(key);
//   console.log(someObj[key]);
// }
