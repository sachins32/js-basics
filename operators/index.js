/*
Operators in Javascript
1. Arithmetic Operator
2. Assignment Operator
3. Comparision Operator
4. Logical Operator
5. Bitwise Operator
*/

// Arithmetic Opererators(8) --> + - * / % ** ++ --
// ** --> exponentiation --> new operator in Javascript

let x = 10;
let y = 2;

console.log('Addition: ', x + y)  // Addition
console.log('Subtraction: ', x - y)  // Subtraction
console.log('Multiplication: ',x * y)  // Multiplication
console.log('Division: ', x / y)  // Division
console.log('Modulous: ',x % y)  // Modulous 
console.log('Exponent: ', x ** y) // Exponentiation

let m = 10;
let n = 20;

// Increment (++)
console.log(++m); // 11
console.log(n++); // 20
console.log(n); // 21

// Decrement (--)
let p = 10;
let q = 20;
console.log(--p); // 9
console.log(q--); // 20
console.log(q); // 19


// Assignment operator --> = 


x++; // is equivalent to
x = x + 1;

x = x + 5;
x += 5;

x = x * 3;
x *= 3;
console.log(x)

// All other Arithmetic operators +, -, /, * and % all have this combination with assignment operator

// Comparison Operator -->  >, >=, <, <=

// Relational Operator
console.log(x > 0);
console.log(x >= 0);
console.log(x < 0);
console.log(x <= 0);

// Equality Operator
console.log(x === 198);  // true 
console.log(x !== 198); // === --> Strict equality, both type and value should match
console.log(x == 198); // true
console.log(x == '198'); // true  --> == Loose equality, doesn't care about the types matching
// == --> If the types do not match, it will convert the type pf what we have on the right side to 
// match what we have on the left side, and then it will only check if the values are equal.
// Use strict equality most of the time, because its very precise

// Ternary or conditional Operator

// If a customer has more than 100 points,
// they are a 'gold' customer, otherwise,
// they are a 'silver' customer.

let points = 110;
let type = points > 100 ? 'gold' : 'silver';
console.log(type)

// Logical Operator --> we use this operator to make decissions based on multiple conditions
// 3 types of Logical Operators in Javascript
// Logical And (&&) --> If both are true --> returns true, else false
// Logical Or (||) --> If either of one operand is true --> returns true
// Logical Not (!) --> Negation 

// Logical Operators with Non Boolean
// In javascript we can use logical operators with non boolean values

// The result of a logical expression is not necessarily a true or false.
// That depends on the value of the operands we have

console.log(false || true); // true
console.log(false || 'Sachin'); // Sachin
console.log(true || 'Sachin'); // true
console.log(false || 1); // 1
console.log(true || 1); // true

// true has highest priority over truthy values
// Falsy values --> undefined, null, 0, false, '', NaN --> treated as false
// Truthy values --> Anything that is not Falsy is Truthy

// If one operand is truthy it will return that value in case of Logical OR operator

console.log(false || 1 || 2); // 1
// It stops evaluation once finds a truthy value --> This is what we call Short-circuiting

// Real world Example
let userColor = 'red'; // replace red with undefined, when user has not selected any color --> we get blue
let defaultColor = 'blue';
let currentColor = userColor || defaultColor;

console.log(currentColor); // red

// Bitwise operator

// We human use decimal system to represent numbers 1,2,3,4,5,6,7,8,9,10,11,12...
// In computers these numbers are stored in binary format --> 0s and 1s
// 1 = 00000001
// 2 = 00000010

// Bitwise operators in JavaScript or any other programming languages are similar to Logical Operators but they work on individual
// bits of a number

// 1 = 00000001
// 2 = 00000010
// R = 00000011 --> 3

console.log(1 | 2); // Bitwise OR // 3

// 1 = 00000001
// 2 = 00000010
// R = 00000000 --> 0
console.log(1 & 2); // Bitwise AND // 0

// Real World Example
// Access control system using Bitwise operator

// Read, Write, Execute
// 00000100
// 00000010
// 00000001

const readPermission = 4;
const writePermission = 2;
const executePermission = 1;

let myPermission = 0;
myPermission = myPermission | readPermission | writePermission;

console.log(myPermission);

// We can use bitwise & operator to see if I have a given permission, Here's an example

let message = (myPermission & readPermission) ? 'yes' : 'no';
console.log(message);

// With the bitwise OR operator, we can add permissions, and with the bitwise AND operator, we can check to
// see if we have a given permission