var num1 = Math.floor(Math.random() * 10);
var num2 = Math.floor(Math.random() * 10);
while ((num1 - num2) < 0) {
    num1 = Math.floor(Math.random() * 10);
    num2 = Math.floor(Math.random() * 10);
}
var answer = num1 - num2;
