// In mathematics a number can be a 
//Prime (whose factors are only 1 and itself)
//Composite --> Not Prime
// 1 is not Prime not composite

function showPrime(limit) {
    for(let number = 2; number <= limit; number++) {
        let isPrime = true;
        for(let factor = 2; factor < number; factor++) {
            if(number % factor === 0) {
                isPrime = false;
                break;
            }
        }
        if(isPrime)
            console.log(number);
    }
}

showPrime(10);


function isPrime(number) {
    for(let factor = 2; factor < number; factor++)
        if(number % factor === 0)
            return false;

    return true;
}

function showPrimes(limit) {
    for(let number = 2; number <= limit; number++)
     if(isPrime(number)) console.log(number);
}

showPrimes(20);