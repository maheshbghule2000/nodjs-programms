// program to find the largest among three numbers

const num1 = parseFloat(4);
const num2 = parseFloat(5);
const num3 = parseFloat(6);
let largest;

if(num1 >= num2 && num1 >= num3) {
    largest = num1;
}
else if (num2 >= num1 && num2 >= num3) {
    largest = num2;
}
else {
    largest = num3;
}

console.log("The largest number is " + largest);