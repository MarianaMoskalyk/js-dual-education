//Завдання 1
function createStepCounter() {
  // Створюю змінну, яка зберігає кількість кроків — приватна (через замикання)
  let steps = 0;

  return {
    // Метод для збільшення кількості кроків
    step() {
      steps++;
    },
    // Метод для отримання поточної кількості кроків
    getSteps() {
      return steps;
    },
  };
}

// 🔹 Приклад використання:
const counter = createStepCounter();
counter.step();
counter.step();
console.log(counter.getSteps()); // 2

//Завдання 2
function createBankAccount(initialBalance) {
  // Приватна змінна для зберігання балансу
  let balance = initialBalance;

  return {
    // Метод для внесення коштів
    deposit(amount) {
      if (amount > 0) {
        balance += amount;
        console.log(`Додано ${amount}. Новий баланс: ${balance}`);
      } else {
        console.log("Сума поповнення повинна бути більшою за 0");
      }
    },

    // Метод для зняття коштів
    withdraw(amount) {
      if (amount <= balance && amount > 0) {
        balance -= amount;
        console.log(`Знято ${amount}. Новий баланс: ${balance}`);
      } else {
        console.log("Недостатньо коштів або некоректна сума");
      }
    },

    // Метод для отримання поточного балансу
    getBalance() {
      return balance;
    },
  };
}

// 🔹 Приклад використання:
const myAccount = createBankAccount(100);
myAccount.deposit(50); // Додано 50. Новий баланс: 150
myAccount.withdraw(30); // Знято 30. Новий баланс: 120
console.log(myAccount.getBalance()); // 120

//Завдання 3
function createGreeter(name) {
  // Функція запам’ятовує значення name через замикання
  return function () {
    console.log(`Привіт, ${name}!`);
  };
}

// 🔹 Приклад використання:
const greetOlya = createGreeter("Оля");
greetOlya(); // "Привіт, Оля!"

const greetMax = createGreeter("Максим");
greetMax(); // "Привіт, Максим!"

//Завдання 4
// Використовую let, щоб кожне i зберігалося окремо в кожній ітерації
for (let i = 1; i <= 5; i++) {
  // Виводжу число з затримкою (1 секунда * номер ітерації)
  setTimeout(() => {
    console.log(i);
  }, i * 1000);
}

// 🔹 У результаті в консолі з’явиться:
// 1 (через 1 секунду)
// 2 (через 2 секунди)
// 3 (через 3 секунди)
// 4 (через 4 секунди)
// 5 (через 5 секунд)
