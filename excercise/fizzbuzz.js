// Divisible by 3 --> Fizz
// Divisible by 5 --> Buzz
// Divisible by 3 & 5 --> FizzBuzz
// Not divisible by 3 or 5 --> input number
// Not a number --> 'Not a number'

function fizzBuzz(number) {
    if(number % 3 === 0 && number % 5 === 0)
        return 'FizzBuzz';

    else if(number % 3 === 0) 
        return 'Fizz';

    else if(number % 5 === 0)
        return 'Buzz';

    else if(typeof number == 'number')
        return number;

    else
        return 'Not a number';  
}

// Better Code

function fizzBuzzBetterCode(number) {
    if (typeof number !== 'number')
        return NaN;

    if(number % 3 === 0 && number % 5 === 0)
        return 'FizzBuzz';

    else if(number % 3 === 0) 
        return 'Fizz';

    else if(number % 5 === 0)
        return 'Buzz';

    else 
        return number;
}

console.log(fizzBuzz(3));
console.log(fizzBuzz(5));
console.log(fizzBuzz(15));
console.log(fizzBuzz(7));
console.log(fizzBuzz('Sachin'));
console.log(fizzBuzz('15'));

console.log(fizzBuzzBetterCode(3));
console.log(fizzBuzzBetterCode(5));
console.log(fizzBuzzBetterCode(15));
console.log(fizzBuzzBetterCode(7));
console.log(fizzBuzzBetterCode('Sachin'));
console.log(fizzBuzzBetterCode('15'));

// typeof NaN is number
