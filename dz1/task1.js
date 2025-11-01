const userName = prompt("Введіть ім'я:");
const userAge = parseInt(prompt("Введіть вік:"));

const user = {
  name: userName,
  age: userAge,
};

console.log(`Імʼя:${user.name} вік:${user.age}`);

const MINIMUM_ACCESSIBLE_AGE = 18;

if (user.age >= MINIMUM_ACCESSIBLE_AGE) {
  console.log("Доступ дозволено");
} else if (user.age < MINIMUM_ACCESSIBLE_AGE) {
  console.log("Вам ще немає 18 років");
} else {
  console.log("Виникла помилка");
}
