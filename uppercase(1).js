// program to convert first letter of a string to uppercase
function capitalizeFirstLetter(str) {


    const capitalized = str.charAt(0).toUpperCase() + str.slice(1);

    return capitalized;
}


const string =('def');

const result = capitalizeFirstLetter(string);

console.log(result);