var num1 = Math.floor(Math.random() * 11);
var num2 = Math.floor(Math.random() * 11);
while ((num1 * num2) > 100){
    num1 = Math.floor(Math.random() * 11);
    num2 = Math.floor(Math.random() * 11);
}
var answer = num1 * num2;