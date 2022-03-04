// Write a function that takes two numbers and 
// returns the maximum of the two.

function maximum(num1, num2) {
    let max = num1;
    if(num2 > max) {
        max = num2;
    }
    return max;
    // return (num1 > num2) ? num1 : num2;
}

// Better code

function max(num1, num2) {
    return (num1 > num2) ? num1 : num2;
}

console.log(maximum(7,10));
console.log(maximum(-3,5));
console.log(maximum(-2,-12));

console.log(max(7,10));
console.log(max(-3,5));
console.log(max(-2,-12));