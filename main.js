// let students = ["alina", "ayana", "kamilla", "diana", "john"];
// let empty = [];
// for (let i in students) {
//   if (students[i] === "john") {
//     continue;
//   }
//   empty.push(students[i]);
// }
// console.log(empty);

// let students = ["Rahima", "Ayana", "Chyngyz", "Lyubov", "Drake"];
// students.splice(4, 1, "Bekjan");
// console.log(students);

// let mentor = {
//   name: "Gennadiy",
//   company: "Makers",
// };
// for (let key in mentor) {
//   console.log(`${key} ${mentor[key]}`);
// }

// let arr = [22, 34, -5];
// let sum = 0;
// for (let num of arr) {
//   sum = sum + num;
// }
// console.log(sum);
// console.log(arr.push(sum));
// console.log(arr);

// let name = prompt("your name");
// let sname = prompt("your second name");
// let age = prompt("your age");
// let obj = {
//   name,
//   sname,
//   age,
// };
// for (let key in obj) {
//   alert(`${obj[key]}`);
// }
// alert(`your name is ${name}`);
// alert(`your second name is ${sname}`);
// alert(`your age is ${age}`);

// let temperature = -5;
// if (temperature < -10) {
//   alert("Температура будет ниже 10 градусов");
// } else {
//   alert("Температура выше 10 градусов");
// }

// let age = 30;
// if (age >= 14 && age <= 90) {
//   alert("age is in the middle");
// }

// let login = prompt("enter login");
// if (login === "admin") {
//   let password = prompt("enter password");
//   if (password === "admin") {
//     alert("welcome!");
//   } else {
//     alert("i don't know you");
//   }
// } else {
//   alert("i don't know you");
// }

// let num = prompt("enter numbers");
// let num2 = prompt("enter secondary number");
// if (num % num2 === 0) {
//   alert("it divides");
// } else {
//   alert("it doesn't");
// }

// for (let i = 5; i <= 10; i++) {
//   console.log(i);
// }

// for (let i = 10; i <= 100; i++) {
//   if (i % 2 !== 0) {
//     console.log(i);
//   }
// }

// let arr = [1, 2, 3, 7, 6, 9];
// let sum = 0;
// for (let num of arr) {
//   sum = sum + num;
// }
// console.log(sum);
// console.log(sum % arr.length);

// let students = [
//   "Sanjar",
//   "Bekzhan",
//   "Chyngyz",
//   "Ayana",
//   "Rahima",
//   "Gennadiy",
//   "Janar",
//   "Aidar",
//   "Radmir",
// ];
// let i = 0;
// while (i < students.length) {
//   i++;
//   console.log(students[i]);
// }

// let obj = { model: "AUDI A8", year: "2019", color: "brown" };

// for (key in obj) {
//   console.log(`${key} ${obj[key]}`);
// }

// let num = [1, 2, 4, 9, 13, 10];
// for (let i =0; i<num.length; i++){

// }

// let arr = "Hello World!";
// for (let key in arr) {
//   if (arr[key] !== " " && arr[key] !== "!" && arr[key] !== "l") {
//     console.log(arr[key]);
//   }
// }

// 11.
// Дан массив с объектами:
// let obj = [
//   { mark: "Wolksvagen", year: 2005, price: 8000, sale: 0 },
//   { mark: "Audi", year: 1996, price: 2500, sale: 0 },
//   { mark: "Mercedes", year: 2001, price: 5000, sale: 0 },
//   { mark: "BMW", year: 2015, price: 18000, sale: 0 },
//   { mark: "Porsche", year: 2020, price: 120000, sale: 0 },
// ];
// for (let val of obj) {
//   console.log(val.sale);
//   if (val.year > "2007") {
//     val.sale = "20%";
//   }
//   console.log(val);
// }

// задача: на все автомобили, которые старше 2007 года, поставить скидку 20%(для скидки использовать свойство 'sale')

// 12.
// Написать программу, которая будет спрашивать у пользователя добавить/удалить элемент из массива, в зависимости от выбора программа должна либо добавлять данные в массив либо запрашивать порядковый номер элемента который нужно удалить и удалять его из массива, также программа должна после всех операций спрашивать хочет ли пользователь повторить действия если да, то программа должна спросить снова удалить или добавить и тд, использовать цикл while

// let arr = ["2", "3", "4"];
// let i = 0;
// while (i < Infinity) {
//   i++;
//   if (confirm("add/remove element?")) {
//     arr.unshift("5");
//   } else {
//     if (prompt("what do you want to delete?")) {
//       arr.slice(prompt);
//     }
//   }
// }

// 13.
// дан объект где ключи это категории товаров, а значения это массивы с названиями товаров, задача реализовать имитацию поиска, спрашиваем у пользователя какой товар он хочет найти, затем ищем этот товар по названию во всех категориях, если товар есть выводим сообщение типа: Товар найден в категории: название категории, затем таже спросить хочет ли пользователь повторить, если да, то все начинаем сначала и тд
// const data = {
//   electronics: ['Samsung', 'Apple', 'Xiaomi'],
//   fruits: ['Apple', 'Pineapple', 'Orange'],
//   cars: ['Audi', 'Mercedes', 'BMW']
// };

// 14.
// Дан массив с объектами:
// [
//     {name: 'Jack', age: 15},
//     {name: 'Helen', age: 34},
//     {name: 'Tom', age: 20},
//     {name: 'Bob', age: 54},
//     {name: 'Jessica', age: 13}
// ], задача: реализовать рассылку сообщений типа: 'Hello, [Здесь должно быть имя клиента], the grand sale has begun, prices are reduced by 20%!', игнорировать клиентов, которым нет 18-ти лет

// ! FUNCTIONS
// 1. function declaration - именованая функция

// function greet() {
//   console.log("You just summoned a function");
// }
// greet();

// function countUntil() {
//   for (let i = 1; i <= 10; i++) {
//     console.log(`Счётчик ${i}`);
//   }
// }
// countUntil(10);

// function countUntilFix(number) {
//   for (let i = 1; i <= number; i++) {
//     console.log(`Счётчик ${i}`);
//   }
// }
// countUntilFix(12);

// ? ЛОКАЛЬНАЯ И ГЛОБАЛЬНАЯ ОБЛАСТИ ВИДИМОСТИ

// let a="hello world!"
// function showMessage(){
//   console.log(a);
// }
// showMessage()

// function showMessage() {
//   let message = "Hello, world!";
// console.log(message);
// }
// showMessage();

// function congratulate(firstName, lastName) {
//   console.log(`Congratulations, ${firstName} ${lastName} with a success`);
// }
// congratulate("Aman", "Dzhumashev");

// ? func declaration

// ? func expression
// let congratulate = function (firstName, lastName) {
//   console.log(`Congratulations, ${firstName} ${lastName} with a success`);
// };
// congratulate("ivan", "ivanov");

// ! RETURN
// function calcTrianleSquare(base, height) {
//   return (1 / 2) * base * height;
// }
// // console.log(calcTrianleSquare(20, 6));
// const firstTriangleSquare = calcTrianleSquare(20, 6);
// const secondTriangleSquare = calcTrianleSquare(10, 5);
// console.log(firstTriangleSquare, "peremennaya");
// console.log(secondTriangleSquare);

// let arr1 = ["ilyas", "aman", "adi"];
// for (let i = 0; i < arr1.length; i++) {
//   console.log(arr1[i]);
// }

// let arr2 = ["milk", "bread", "cola", "fanta"];
// for (let i = 0; i < arr2.length; i++) {
//   console.log(arr2[i]);
// }
// function consoleList(arr) {
//   for (let i = 0; i < arr.length; i++) {
//     console.log(arrpi);
//   }
// }
// 2. function expression - анонимная функция
// function checkTask(num) {
//   let str = num.toString();
//   let sum = 0;

//   for (let i = 0; i < str.length; i++) {
//     console.log(str[i]);
//     sum += +str[i];
//   }
//   return sum;
// }
// console.log(checkTask(456));

// локальная область
// function calcSum(num1, num2) {
//   let sum = num1 + num2;
//   console.log(sum);
// }
// calcSum(4, 5);

// ! ARGUMENTS
// function checkFunc() {
//   console.log(arguments);
// }
// checkFunc(1, 3, 2, 12, 3);
// checkFunc;

// ! RETURN закрепление

// function isEven(value) {
//   if (value === undefined || value === null) {
//     return false;
//   }
//   return value % 2 == 0;
// }
// console.log(isEven(2));
// let checkIsEven1 = isEven(3);
// console.log(checkIsEven1);
// console.log(isEven);

// function checkAge(num) {
//   if (num > 18) {
//     return true;
//   } else {
//     return false;
//   }
// }
// let resultOfChecking = checkAge(19);
// function letUserPlay(result) {
//   if (result) {
//     alert("Welcome!");
//   } else {
//     alert("Access denied");
//   }
// }
// letUserPlay(resultOfChecking);

// function checkTask(stroka) {
//   let newStr = "";
//   let glasnie = ["a", "e", "i", "o", "u"];
//   for (val of stroka) {
//     // console.log(val, "VAL@");
//     if (!glasnie.includes(val)) {
//       newStr += val.toUpperCase();
//     }
//   }
//   return newStr;
// }
// console.log(checkTask("hello"));

// function calcSum(num1, num2) {
//   return num1 + num2;
// }
// console.log(calcSum(2));
// let arrowFunc = a => {
//   console.log(a);
// };
// arrowFunc("Hello World!");

// let showMessage = a => a * 2;
// console.log(showMessage(5));

// let person = {
//   name: "diana",
//   age: 20,
//   check: function () {
//     console.log(person);
//   },
// };
// console.log(person.check);
// person.check();

// let person2 = { ...person };
// person2.name = "Abbas";
// console.log(person2);

// let func1 = () => {
//   console.log("JavaScript");
// };
// func1();

// ! CALLBACK FUNCTION
// function doTask(task, startTask, finishTask) {
//   startTask(task);
//   finishTask(task);
// }
// function startTask(task) {
//   console.log(`начато выполнение таска: ${task}`);
// }
// function finishTask(task) {
//   console.log(`закончено выполнение: ${task}`);
// }
// doTask("Методы массивов", startTask, finishTask);

// ! FOREACH
// const languages = ["JS", "PYTHON", "C++", "C", "Java", "PHP"];
// for (let i = 0; i < languages.length; i++) {
//   console.log(languages[i]);
// }

// languages.sort()
// languages.forEach((value, index, array) => {
//   console.log(array);
// });

// let fav = [];
// let res = languages.forEach(lang => {
//   if (lang == "JS") {
//     fav.push(lang);
//   }
// });
// console.log(fav);

// const cats = [
//   {
//     name: "Kitty",
//     age: 2,
//   },
//   {
//     name: "Ferry",
//     age: 6,
//   },
//   {
//     name: "Lulu",
//     age: 4,
//   },
// ];
// let oldCats = [];
// cats.forEach((cat, index, array) => {
//   if (cat.age > 5) {
//     oldCats.push(cat);
//   }
//   if (index == array.length - 1) {
//     console.log(`last cat in array is ${cat.name}`);
//   }
// });
// console.log(oldCats);

// ! MAP - создает новый массив
// ! принимает callback функция, а сам callback принимает элемент, индекс и массив

// ? в качестве callback функции использовали function expression
// const numbers = [1, 2, 3, 4, 5, 6];
// let newAarr = numbers.map(function (num, index, arr) {
//   return num * 2;
// });
// console.log(newAarr);

// ? в качестве callback юзается function declaration
// const numbers = [1, 2, 3, 4, 5, 6];
// function callback(num) {
//   return num * 2;
// }
// let newAarr = numbers.map(callback);
// console.log(newAarr);

// ! FIND - создаёт массив и вставляет туда первую вещь которую ты искал

// const numbers = [1, 3, 5, 72, 33, 21];
// const evenNumbers = numbers.find(num => num % 2 == 0);
// console.log(evenNumbers);

// ! FINDINDEX - ищет нужную вещь и вставляет её в новый массив, иначе "-1"
// const arr = ["nick", "jack", "roma"];
// const foundIndex = arr.findIndex(name => name == "abbas");
// console.log(foundIndex);

// ! INDEXOF - ищет и показывает первый найденный элемент

// const arr = ["nick", "jack", "roma"];
// const foundIndexOf = arr.indexOf("nick");
// console.log(foundIndexOf);

// let arr = [2, 5, 9, 8, 4, 8, 3, 55, 7, 1];
// let newArr = arr.filter((item, index, array) => {
//   return item % 2 === 0;
// });
// console.log(newArr);

// reduce (()=> {}, initialValue)
// previousValue - аргумент для промежуточного результата
// currentValue - текущий элемент массива
// currentIndex - index текущего элемента
// array - сам массив(исходный)
// let arr = [2, 5, 9, 8, 4, 8, 3, 55, 7, 1, "Hello"];
// let result = arr.reduce((prevVal, currentVal, currentIndex, array) => {
//   // console.log(prevVal);
//   // console.log(currentVal);
//   // console.log("===============");
//   return prevVal + currentVal;
// });
// console.log(result);

// let arr = ["tom", "aman", "jack"];
// let res = arr.includes("aman", 1);
// console.log(res);

// let arr = [1, 2, 3, 4, 5, 6, 7];
// let res = arr.every((item, index, array) => {
// return typeof item === "number";
// });
// console.log(res);

// let arr = ["hello", "world", "JS", "Python"];
// let res = arr.some(item => {
// return typeof item === "string";
// });
// console.log(res);

// let lengthName = [
//   "Patricia",
//   "William",
//   "Barbara",
//   "James",
//   "Chloe",
//   "Elizabeth",
// ];
// let newName = lengthName.map(lengthName => lengthName.length);
// console.log(newName)

// let lengthName = [];
// let newArr = lengthName.map(item => {
//   console.log(item);
//   return item.length
// });

// let arr = [1, -3, 5, 7, -4, 9];
// let newArr = arr.filter(item => {
//   return item > 0;
// });
// console.log(newArr);

// let arr = [1, 2, 5, 9, 4, 13, 4, 10];
// for (let i = 0; i <= arr.length; i++) {
//   if (arr[i] == 4) {
//     console.log("Есть!");
//     break;
//   }
// }

// let arr = [1, 2, 5];
// arr.splice(-1, 0, 3, 4);
// console.log(arr);

// for (let i = 0; i < 10; i++) {
//   console.log(i);
// }

// function checkTask() {
//   let arr = ["Молоко", 77, 11, "Мед&quot", -88];
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] == String) {
//       console.log(`${i} - число`);
//     } else {
//       console.log(`${i} - не число`);
//     }
//   }
// }

// let arr1 = [2, 3, 4, 5];
// for (let i = 0; i < arr1.length; i++) {
//   arr1[i ** 2];
//   console.log(arr1);
// }

// function compareNumbers(arr) {
//   var arr = arr.sort(function (a, b) {
//     return a - b;
//   });
//   document.writeln(arr);
// }

// var numbers = [3, 8, 7, 6, 5, -4, 3, 2, 1];
// compareNumbers(1, 3, 4, 6, 10);

// let list = ["milk", "sugar", "salt", "oil", "pepper"];
// // let first = list[0]
// // let second = list[1]
// // let other = [list[2], list[3], list[4]]
// let [first, second, third, ...other] = list;
// console.log(first, second, third, other);

// let arr = [
//   [0, 1, 2, [3]],
//   [4, 5, 6, 7],
// ];
// let [[a, b, c, [d]], newArr] = arr;
// console.log(a, b, c, d, newArr);

// let arr = [0, 1, 2, 3, 4, 5];
// let [, , , , for4] = arr;
// console.log(for4);

// let person = {
// age: 30,
// name: "john",
// lastName: "snow",
// };
// let name = person.name;
// let age = person.age;
// let lastName = person.lastName;

// let { name, lastName, age } = person;
// console.log(name, age, lastName);

// let obj = {
// subObj: {
// name: "Jack",
// },
// };
// let { subObj } = obj;
// let { name } = subObj;
// let {
// subObj: { name },
// } = obj;
// console.log(name);

// let obj = {
//   arr: [
//     {
//       name: "Tom",
//     },
//   ],
// };
// let {
//   arr: [{ name }],
// } = obj;
// console.log(name);

// function test({ age }) {
//   console.log(`Вам ${age} лет`);
// }
// let person = {
//   name: "John",
//   age: 30,
// };
// test(person);

// function hello(name, age) {
//   console.log(`Hello ${name}, you are ${age} old`);
// }
// function hello3(name, age) {
//   console.log(`Hello ${name}, you are ${age} old`);
// }
// hello("Aman", 20);
// hello3("Dolbaeb", 10000);

// let obj = {
//   name: "T",
//   color: "black",
// };

// let obj2 = {
//   lastName: "N",
//   surname: "M",
//   color: "white",
// };

// let { color } = obj;
// let newObj = { ...obj2, color };
// console.log(newObj);

// let obj = {
//   name: "John",
//   age: 25,
//   positions: ["Python Mentor", "JS Mentor", "Developer"],
//   cat: {
//     name: "Amogus",
//     age: 8,
//   },
// };

// function getInfo({ name, positions: [...skills], cat: { name: catName } }) {
//   console.log(
//     `Hello,
//     ${name}, you work at ${skills}, you have a cat and its name is ${catName}`
//   );
// }
// getInfo(obj);

// let obj = {
//   name: "marketplace",
//   frameworks: ["react", "django API"],
//   versions: {
//     legacy: [2011, 2012, 2013],
//   },
// };
// let {
//   name,
//   frameworks: [j1 , j2],
//   versions: {
//     legacy: [y1, y2, y3],
//   },
// } = obj;
// console.log(name, j1  , j2, y1, y2, y3);

// ! Поверхностное копирование

// let arr = ["Hello", "Bye", "Good"];
// // let newArr = arr;
// let newArr = [...arr];
// newArr[1] = "End";
// console.log(newArr);
// console.log(arr);

// ? Spread используется для поверхностного копирования

// let obj = {
//   model: "Apple",
//   memory: 128,
//   year: 2022,
//   details: {
//     color: "Gray",
//     camera: "Full HD",
//   },
// };
// // let newObj = { ...obj };
// let newObj = JSON.stringify(obj);
// newObj = JSON.parse(newObj);
// // console.log(newObj);
// newObj.model = "Samsung";
// newObj.details.camera = "Retina";
// console.log(newObj);
// console.log(obj);
// console.log(newObj.details.camera);

// ? JSON.parse() и JSON.stringify()
// * JSON.stringify() преобразует переданный элемент в строку с форматом JSON.
// * JSON.parse() преобразует его обратно в JS.
// * Это позволяет выполнять глубокое копирование и для вложенных объектов, чего не происходит со Spread

// let user1 = {
//   name: " Johnny",
//   age: 23,
//   sayInfo: function () {
//     console.log(`Меня зовут ${this.name}, мне ${this.age} лет`);
//   },
// };
// // console.log(user1);
// user1.sayInfo();

// let user2 = JSON.parse(JSON.stringify(user1));
// user2.name = "Kani";
// user2.age = 19;
// user2.sayInfo();

// let arr = [1, 2, 3, 4, 5, 6, 7];
// arr.forEach(elem => {
// console.log(elem);
// });

// let dt = Date.();
// console.log(dt);
// console.log(window);
// let geo = "12.6";
// console.log(parseInt(geo) + 45);

// let arr = [
//   [1, 2, 3],
//   [4, 5, 6],
//   [7, 8, 9],
//   [10, 11, 12],
// ];
// let res = arr.map(x => x * );
// console.log(res);

// let arr = [[1, 2, 3], [4, 5, 6], [7, 8, 9], [10, 11, 12]];
// let newArr = arr.map((item))

// let = [1, 2, 3, "stop", 4, 5, 6]

let info = {
  name: "Jack",
  age: 34,
  work: "IT",
  hours: 23,
  salary: 2300,
  experience: 450,
};
function job() {
  info.hours += 6;
  info.salary += 600;
  console.log("job completed", info);
}
function payday() {
  if (info.salary >= 3000) {
    (info.experience += info.salary), (info.salary = 0), (info.hours = 0);
    console.log("payday info", info);
  } else {
    console.log("Not enough money");
  }
}
console.log("starting info", info);
job();
job();
payday();
