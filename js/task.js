// -----------------------------------------TASK 7------------------------------------------//
// Потрібно мутувати масив так щоб залишились тільки (імена) елементи типу String.
// const names = ['Anna', 3, 'Roma', 17, 'Kate', 14, 'Oleg'];

// -----------------------------------------TASK 8------------------------------------------//
// Потрібно створити світлофор за допомогою switch()
// Користувач вводить в prompt() колір який він бачить
// В результаті отримує меседж з дією яку повинен виконати
// Світлофор може мати 4 стани green (GO), yellow (READY),red (STOP), будь що інше означає що сфітлофор не працює (BE CAREFUL)

// -----------------------------------------TASK 9------------------------------------------//
//Створіть функцію, яка приймає 1 параметр
//1 масив імен користувачів, які поставили лайки.
//Функція повертає меседж, як вказано у прикладах:
//Використовувати switch()

// function stringBuilder(users){

// }

// stringBuilder([])//"no one likes this";
// stringBuilder(["Peter"])//"Peter likes this";
// stringBuilder(["Jacob", "Alex"])//"Jacob and Alex like this";
// stringBuilder(["Max", "John", "Mark"])//"Max, John and Mark like this";
// stringBuilder(["Alex", "Jacob", "Mark", "Max"])//"Alex, Jacob and 2 others like this;

// -----------------------------------------TASK 10-----------------------------------------//
// Cтворити функцію яка буде приймати 1 параметр та знаходити в масиві елементи що дублюються і потім ці елменти добавляти в новий масив
// 1 масив чисел (arr)

// const numbers = [1, 2, 3, 2, 1, 17, 19]

// function getCommonElements(arr){

// };
// getCommonElements(numbers)

// NEW TASK
// // Порахувати скільки ззаробив кожен  юзер
// // (функція приймає 2 параметри
// // 1 параметр масив
// // 2 параметр імя робітника
// // Функція повертає скільки він робітник (salary*month) )

// // Порахувати загальну суму заробітку всіх робітників()
// // (функція приймає 1 параметр масив, і повертає загальну суму заробітку всіх робітників);

// ------------------TASK 11------------------

// const workers = [
//   {
//     name: "Alex",
//     salary: 3500,
//     month: 12,
//   },
//   {
//     name: "Dima",
//     salary: 2500,
//     month: 9,
//   },
//   {
//     name: "Oleg",
//     salary: 1500,
//     month: 36,
//   },
// ];

// function getSalary(arr, name) {
//   const worker = arr.find(({ name: workerName }) => workerName === name);
//   console.log(worker);
//   return worker.salary * worker.month;
// }

// function totalSalary(arr) {
//   return arr.reduce((acc, { name }) => acc + getSalary(arr, name), 0);
// }

// console.log(getSalary(workers, "Alex"));
// console.log(totalSalary(workers));

// ----------------------TASK 12-------------------------

// class User { 
//   #name;
//   #surname;

//   constructor(name, surname) { 
//     this.#name = name;
//     this.#surname = surname;
//   }

//   getFullName() { 
//     return this.#name + ' ' + this.#surname;
//   }

// }

// class Student extends User { 

//   constructor(name, surname, year) { 
//     super(name, surname);
//     this.year = year;
//   }

//     getCourse() { 
//       return (new Date().getFullYear() - this.year <= 5) ? new Date().getFullYear() - this.year : 'Game over';
//   }

// }

// const student = new Student('Petrik', 'Huedrik', 2017);
// console.log(student.getFullName());
// console.log(student.getCourse());

// --------------------------THIS-------------------------

// const user = {
//     name: 'User',
//     currentThis: this,
//     getThis() {
//         console.log('getThis',this);
//         const testThis = () => {
//             console.log('testThis',this);
//         }
//         testThis()
//     },
//     getArrowThis:  () => {
//         console.log('getArrowThis',this);
//     }
// }
// user.getThis()
// user.getArrowThis()