// program to sort words in alphabetical order


const string = "this is a java script";


const words = string.split(' ');


words.sort();


console.log('The sorted words are:');

for (const element of words) {
  console.log(element);
}