// program to include JS file into another JS file

const message = 'hello world';

const number = 10;

function multiplyNumbers(a, b) {
    return a * b;
}

export { message, number, multiplyNumbers };
// import the variables and function from module.js
import { message, number, multiplyNumbers } from './modules.js';

console.log(message); 

console.log(number); 

console.log(multiplyNumbers(3, 4)); // 12
console.log(multiplyNumbers(5, 8)); // 40
export { message, number, multiplyNumbers };
export const message = 'hello world';

export const number = 10;
import { message, number, multiplyNumbers } from './modules.js';
