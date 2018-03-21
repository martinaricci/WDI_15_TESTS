console.log('javascript data types test!');

// DATA TYPES


typeof 15
// Prediction: number
// Actual: number 

typeof 5.5
// Prediction: number
// Actual: number 

typeof NaN
// Prediction: not a number
// Actual: number

typeof "hello"
// Prediction: String
// Actual: String

typeof true
// Prediction: Boolean
// Actual: Boolean

typeof 1 != 2
// Prediction: true
// Actual: true


"hamburger" + "s"
// Prediction: concatenation
// Actual: hamburgers

"hamburgers" - "s"
// Prediction: hamburger
// Actual: NaN

"1" + "3"
// Prediction: 13
// Actual: 13

"1" - "3"
// Prediction: NaN
// Actual: -2

"johnny" + 5
// Prediction: johnny5
// Actual: johnny5

"johnny" - 5
// Prediction: NaN
// Actual: NaN

99 * "luftbaloons"
// Prediction: not sure
// Actual: NaN


// ARRAYS

var cities = ['rome', 'paris', 'toronto', 'berlino'];

cities.push('naples');
cities.pop('naples');
cities.unshift('barcelona');
cities.shift('barcelona');

cities.join();
cities.split('');

//-----------------------------

var numbers = [2, 4, 6, 8]
numbers.pop()
numbers.push(10)
numbers.unshift(3)

// MY ANSWER
[ 3, 2, 4, 6, 10 ]

//-----------------------------
var morse = ["dot", "pause", "dot"]


var moreMorse = morse.join("dash");
moreMorse.split(" ");

//MY ANSWER
[ 'dotdashpausedashdot' ]

//CONDITIONALS
var age = prompt('what is your age?');
if (age > 21) {
  console.log("come on in!");
} else if (age > 18 && age < 21) {
  console.log("come on in (but no drinking)!");
} else if (age < 18) {
  console.log("you're too young to be here!");
} else {
  console.log("are you sure you want to be here?");
}
