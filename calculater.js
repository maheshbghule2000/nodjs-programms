// program for a simple calculator


const operator = ('+');


const number1 = parseFloat(2.1);
const number2 = parseFloat(3.1);

let result;
if (operator == '+') {
    result = number1 + number2;
}
else if (operator == '-') {
    result = number1 - number2;
}
else if (operator == '*') {
    result = number1 * number2;
}
else {
    result = number1 / number2;
}


console.log(`${number1} ${operator} ${number2} = ${result}`);