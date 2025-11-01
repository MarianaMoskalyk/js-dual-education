//Завдання 1
// Власна імплементація Array.includes
function myIncludes(array, value) {
  // Перебираю всі елементи масиву
  for (let i = 0; i < array.length; i++) {
    // Якщо елемент збігається зі значенням — повертаю true
    if (array[i] === value) {
      return true;
    }
  }
  // Якщо цикл завершився без збігів — повертаю false
  return false;
}

// Приклад використання:
console.log(myIncludes([1, 2, 3], 2)); // Очікується: true
console.log(myIncludes([1, 2, 3], 5)); // Очікується: false

//Завдання 2
// 1) Створюю порожній об’єкт user
let user = {};

// 2) Додаю властивість name зі значенням "Іван"
user.name = "Іван";

// 3) Додаю властивість surname зі значенням "Сміт"
user.surname = "Сміт";

// 4) Змінюю name на "Петро"
user.name = "Петро";

// 5) Видаляю властивість name
delete user.name;

console.log(user); // Перевіряю результат

//Завдання 3
let a = +prompt("a?", "");

// Переписую умови з if...if...if у конструкцію switch
switch (a) {
  case 0:
    alert(0);
    break;
  case 1:
    alert(1);
    break;
  case 2:
  case 3:
    alert("2,3");
    break;
  default:
    alert("Інше значення"); // на випадок, якщо буде щось інше
}

//Завдання 4
// Функція перевіряє, чи порожній об’єкт
function isEmpty(obj) {
  // Перебираю властивості об’єкта
  for (let key in obj) {
    // Якщо хоч одна властивість є — об’єкт не порожній
    return false;
  }
  // Якщо жодної властивості — об’єкт порожній
  return true;
}

// Приклад роботи:
let schedule = {};

alert(isEmpty(schedule)); // true

schedule["8:30"] = "Вставай";

alert(isEmpty(schedule)); // false

//Завдання 5
// Функція об’єднує два масиви в один
function mergeArrays(arr1, arr2) {
  // Використовую оператор розпакування, щоб створити новий масив
  return [...arr1, ...arr2];
}

// Приклади використання:
console.log(mergeArrays([1, 2], [3, 4]));
// Очікується: [1, 2, 3, 4]

console.log(mergeArrays(["a", "b"], ["c"]));
// Очікується: ['a', 'b', 'c']

//Завдання 6
// Власна реалізація join()
function myJoin(arr, separator = ",") {
  // Якщо масив порожній — повертаю порожній рядок
  if (arr.length === 0) return "";

  // Починаю з першого елемента
  let result = arr[0];

  // Додаю решту елементів через роздільник
  for (let i = 1; i < arr.length; i++) {
    result += separator + arr[i];
  }

  return result;
}

// Приклади використання:
console.log(myJoin([1, 2, 3], "-"));
// Очікується: "1-2-3"

console.log(myJoin(["Hello", "world"], " "));
// Очікується: "Hello world"

console.log(myJoin(["a", "b", "c"]));
// Очікується: "a,b,c"
