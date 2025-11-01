//Завдання 1
const user = {
  name: "Мар'яна",
  age: 19,
  greet() {
    console.log(`Привіт, мене звати ${this.name} і мені ${this.age} років.`);
  },
};

// Зберігаю метод у змінну — тут контекст (this) губиться
const greetUser = user.greet;
greetUser(); // Помилка контексту

// Використовую bind, щоб прив’язати this до user
const boundGreet = user.greet.bind(user);
boundGreet(); // Привіт, мене звати Мар'яна і мені 19 років.

//Завдання 2

// Створюю функцію, яка виводить ім'я та вік з об'єкта
function introduce() {
  console.log(`Мене звати ${this.name} і мені ${this.age} років.`);
}

// Створюю об'єкт person
const person = { name: "Олег", age: 25 };

// Викликаю функцію з контекстом person за допомогою call
introduce.call(person); // this тепер посилається на person

//Завдання 3

// Функція приймає прізвище та місто
function showFullNameAndCity(surname, city) {
  console.log(`Мене звати ${this.name} ${surname}, я з міста ${city}.`);
}

// Створюю об'єкт user
const user2 = { name: "Іван" };

// Викликаю функцію через apply, передаючи масив аргументів
showFullNameAndCity.apply(user, ["Петренко", "Київ"]); // ✅ працює

//Завдання 4

// Функція множить два числа
function multiply(a, b) {
  return a * b;
}

// Створюю функції з "попередньо заповненими" аргументами
const double = multiply.bind(null, 2); // завжди множить на 2
const triple = multiply.bind(null, 3); // завжди множить на 3

// Перевіряю роботу функцій
console.log(double(5)); // 10
console.log(triple(4)); // 12

//Завдання 5

// Створюю об'єкт лічильника
const counter = {
  count: 0,
  increment() {
    this.count++;
  },
  decrement() {
    this.count--;
  },
  show() {
    console.log(this.count);
  },
};

// Викликаю методи напряму
counter.increment();
counter.increment();
counter.show(); // 2

// Зберігаю метод у змінну — контекст губиться
const inc = counter.increment;
inc(); // тут this вже не вказує на counter

// Виправляю ситуацію за допомогою bind
const boundInc = counter.increment.bind(counter);
boundInc();
boundInc();
counter.show(); // 4
