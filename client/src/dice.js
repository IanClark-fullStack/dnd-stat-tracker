// Випадкові кубики кидаються при натисканні

// кубик d4, при натисканні зробіть щось
$("#dice-roller-d4").on("click", () => {
  let totalDiceRollSum = 0;
  // integer value of the number
  const numOfRolls = parseInt($("#count_1").val());
  console.log(numOfRolls);
  // Якщо кинуто більше одного кубика,
  // кинути й обчислити загальну суму випадкових результатів
  for (let i = 0; i < numOfRolls; i++) {
    // Math.round, але десяткові дроби
    let result = Math.floor(Math.random() * 4) + 1;
    totalDiceRollSum = totalDiceRollSum + result;
  }
  // "d4-generated-num" 
  //  отримала integer
  document.getElementById("d4-generated-number").innerHTML = totalDiceRollSum;
});
$("#dice-roller-d6").on("click", () => {
  let totalDiceRollSum = 0;
  const numOfRolls = parseInt($("#count_2").val());
  console.log(numOfRolls);
  for (let i = 0; i < numOfRolls; i++) {
    let result = Math.floor(Math.random() * 6) + 1;
    totalDiceRollSum = totalDiceRollSum + result;
  }
  document.getElementById("d6-generated-number").innerHTML = totalDiceRollSum;
});
$("#dice-roller-d8").on("click", () => {
  let totalDiceRollSum = 0;
  const numOfRolls = parseInt($("#count_3").val());
  console.log(numOfRolls);
  for (let i = 0; i < numOfRolls; i++) {
    let result = Math.floor(Math.random() * 8) + 1;
    totalDiceRollSum = totalDiceRollSum + result;
  }
  document.getElementById("d8-generated-number").innerHTML = totalDiceRollSum;
});
$("#dice-roller-d10").on("click", () => {
  let totalDiceRollSum = 0;
  const numOfRolls = parseInt($("#count_4").val());
  console.log(numOfRolls);
  for (let i = 0; i < numOfRolls; i++) {
    let result = Math.floor(Math.random() * 10) + 1;
    totalDiceRollSum = totalDiceRollSum + result;
  }
  document.getElementById("d10-generated-number").innerHTML = totalDiceRollSum;
});
$("#dice-roller-d12").on("click", () => {
  let totalDiceRollSum = 0;
  const numOfRolls = parseInt($("#count_5").val());
  console.log(numOfRolls);
  for (let i = 0; i < numOfRolls; i++) {
    let result = Math.floor(Math.random() * 12) + 1;
    totalDiceRollSum = totalDiceRollSum + result;
  }
  document.getElementById("d12-generated-number").innerHTML = totalDiceRollSum;
});
$("#dice-roller-d20").on("click", () => {
  let totalDiceRollSum = 0;
  const numOfRolls = parseInt($("#count_6").val());
  console.log(numOfRolls);
  for (let i = 0; i < numOfRolls; i++) {
    let result = Math.floor(Math.random() * 20) + 1;
    totalDiceRollSum = totalDiceRollSum + result;
  }
  document.getElementById("d20-generated-number").innerHTML = totalDiceRollSum;
});

// Плюс лічильники
$("#plus_1").on("click", () => {
  const currentValue = $("#count_1").val();
  // Функція parseInt() аналізує рядковий аргумент і
  // повертає ціле число
  $("#count_1").val(parseInt(currentValue) + 1);
});
$("#plus_2").on("click", () => {
  const currentValue = $("#count_2").val();
  $("#count_2").val(parseInt(currentValue) + 1);
});
$("#plus_3").on("click", () => {
  const currentValue = $("#count_3").val();
  $("#count_3").val(parseInt(currentValue) + 1);
});
$("#plus_4").on("click", () => {
  const currentValue = $("#count_4").val();
  $("#count_4").val(parseInt(currentValue) + 1);
});
$("#plus_5").on("click", () => {
  const currentValue = $("#count_5").val();
  $("#count_5").val(parseInt(currentValue) + 1);
});
$("#plus_6").on("click", () => {
  const currentValue = $("#count_6").val();
  $("#count_6").val(parseInt(currentValue) + 1);
});

// Мінус лічильника входів
$("#minus_1").on("click", () => {
  const currentValue = $("#count_1").val();
  // Припиніть відлік декременту на 1 кубику
  $("#count_1").val(parseInt(currentValue) - 1);
  /* Тернарний оператор для двох варіантів:
  // Умова, за якою слідує ?, відокремлена символом :
  // Якщо умова істинна, виконується перший вираз
  // інакше другий.
  */
  $("#count_1").val(currentValue - 1 < 1 ? 1 : currentValue - 1);
});
$("#minus_2").on("click", () => {
  const currentValue = $("#count_2").val();
  $("#count_2").val(parseInt(currentValue) - 1);
  $("#count_2").val(currentValue - 1 < 1 ? 1 : currentValue - 1);
});
$("#minus_3").on("click", () => {
  const currentValue = $("#count_3").val();
  $("#count_3").val(parseInt(currentValue) - 1);
  $("#count_3").val(currentValue - 1 < 1 ? 1 : currentValue - 1);
});
$("#minus_4").on("click", () => {
  const currentValue = $("#count_4").val();
  $("#count_4").val(parseInt(currentValue) - 1);
  $("#count_4").val(currentValue - 1 < 1 ? 1 : currentValue - 1);
});
$("#minus_5").on("click", () => {
  const currentValue = $("#count_5").val();
  $("#count_5").val(parseInt(currentValue) - 1);
  $("#count_5").val(currentValue - 1 < 1 ? 1 : currentValue - 1);
});
$("#minus_6").on("click", () => {
  const currentValue = $("#count_6").val();
  $("#count_6").val(parseInt(currentValue) - 1);
  $("#count_6").val(currentValue - 1 < 1 ? 1 : currentValue - 1);
});
