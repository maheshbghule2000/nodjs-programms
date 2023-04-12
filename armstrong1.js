// program to find Armstrong number between interval
const lowNumber = parseInt(7);
const highNumber = parseInt(800);

console.log ('Armstrong Numbers:');


for (let i = lowNumber; i <= highNumber; i++) {

    
    let numberOfDigits = i.toString().length;

    let sum = 0;

    let temp = i;

    
    while (temp > 0) {

        let remainder = temp % 10;
        sum += remainder ** numberOfDigits;
        
        temp = parseInt(temp / 10); 
         
    }
 
    if (sum == i) {
        console.log(i);
    }
}