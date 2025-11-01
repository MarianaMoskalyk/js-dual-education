//Завдання 1
function printPowsOf2(number) {
  // Перевіряю, чи тип даних є числом
  if (typeof number !== "number") {
    console.log("incorrect type"); // Якщо не число — виводжу помилку
    return;
  }

  let result = [];
  let power = 1; // Початкове значення степеня двійки

  // Цикл, поки значення степеня двійки не перевищує задане число
  while (power <= number) {
    result.push(power);
    power *= 2; // Збільшую степінь двійки
  }

  // Виводжу усі знайдені числа у консоль
  console.log(result.join(", "));
}

printPowsOf2("302"); // incorrect type
printPowsOf2(null); // incorrect type
printPowsOf2(128); // 1, 2, 4, 8, 16, 32, 64, 128
printPowsOf2(60); // 1, 2, 4, 8, 16, 32

//Завдання 2
function calculateSumOfArray() {
  const initialArray = [3, 2, "2", null, 1.5, 9.5, undefined];

  // Використовую метод reduce для обчислення суми
  const sum = initialArray.reduce((acc, value) => {
    // Перевіряю, чи елемент є числом і не NaN
    if (typeof value === "number" && !isNaN(value)) {
      return acc + value; // Додаю тільки числа
    }
    return acc; // Якщо не число — просто повертаю поточну суму
  }, 0);

  // Виводжу результат у консоль
  console.log(sum);
}

calculateSumOfArray(); // 16

//Завдання 3
function printSeasonByMonth(month) {
  // Перетворюю місяць у верхній регістр для надійності
  const m = month.toUpperCase();

  // Перевіряю, до якої пори року належить місяць
  if (["DECEMBER", "JANUARY", "FEBRUARY"].includes(m)) {
    console.log("winter");
  } else if (["MARCH", "APRIL", "MAY"].includes(m)) {
    console.log("spring");
  } else if (["JUNE", "JULY", "AUGUST"].includes(m)) {
    console.log("summer");
  } else if (["SEPTEMBER", "OCTOBER", "NOVEMBER"].includes(m)) {
    console.log("autumn");
  } else {
    console.log("unknown month"); // Якщо передали щось некоректне
  }
}

printSeasonByMonth("SEPTEMBER"); // autumn
printSeasonByMonth("NOVEMBER"); // autumn
printSeasonByMonth("JULY"); // summer
printSeasonByMonth("APRIL"); // spring

//Завдання 4
function calculateWordsInString(string) {
  // Замінюю всі розділові знаки на пробіл, щоб вони не заважали
  const cleaned = string.replace(/[^\w\s]/g, " ");

  // Розділяю рядок на слова, ігноруючи зайві пробіли
  const words = cleaned.trim().split(/\s+/);

  // Виводжу кількість слів у консоль
  console.log(words.length);
}

calculateWordsInString("Easy string for count"); // 4
calculateWordsInString("Easy"); // 1
calculateWordsInString("Some string with a triple   space"); // 6
calculateWordsInString("Some?  string, with a triple   space"); // 6
