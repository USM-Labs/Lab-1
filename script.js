alert("Этот код выполнен из внешнего файла!");
console.log("Сообщение в консоли");


var userName = 'Max';
var birthYear = 2005;
var isStudent = true;

console.log(`Name: ${userName}\nYear of birth: ${birthYear}\nStudent: ${isStudent}`);


let score = prompt("Введите ваш балл:");
if (score >= 90) {
console.log("Отлично!");
} else if (score >= 70) {
console.log("Хорошо");
} else {
console.log("Можно лучше!");
}

for (let i = 1; i <= 5; i++) {
console.log(`Итерация: ${i}`);
}
