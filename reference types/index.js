/* 3 types
1. Object 
2. Array
3. Function
*/


let firstName = 'Sachin';
let age = 25;

// Object
let person = {
    firstName : 'Sachin',
    age : 25
}

console.log(person)

// Two ways we can access object
// 1. Using dot notation
console.log(person.age);

// 2. Using Bracket Notation
console.log(person['firstName'])
// Bracket Notation is helpful when we do not know the key name and it is available at runtime


// Array -- is a Data Structure

let selectedColors = ['red', 'black', 'yellow']

console.log(selectedColors);

// access using index
console.log(selectedColors[0])

// Javascript is dynamically typed program, it applies to array as well
//Objects type and length of an array can change at runtime

selectedColors[3] = 'white';
console.log(selectedColors)

selectedColors[4] = 50;
console.log(selectedColors)

// Array is an Object
console.log(typeof selectedColors);

// length of array
console.log(selectedColors.length);

// Functions

function greet() {
    console.log("Hello!")
}

greet()

function sayHello(name) {      // name is a parameter of sayHello()
    console.log('Hello' + ' ' + name);  
}

sayHello('Sachin'); // Sachin is an argument to sayHello()
sayHello('Ram');


