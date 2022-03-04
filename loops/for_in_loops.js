// for
// while
// do while

// We have two more kinds of loops in Javascript
// we use them to iterate over the properties of an object
// or elements in an array

// for - in loop

const person = {
    firstName : 'Sachin',
    age : 25
};

for(let key in person){
    console.log(key);
}

for(let key in person){
    console.log(key, person[key]);
}

// for-in for arrays is not ideal, but let's see how it is used with arrays

const colors = ['red', 'green', 'blue'];

for(let index in colors){
    console.log(index, colors[index]);
}

//Starting from ECMAScript 6 or ES6, which is the modern version of JavaScript we have 
// a new kind of loop that is called for-of loop --> ideal way to iterate  over arrays.
