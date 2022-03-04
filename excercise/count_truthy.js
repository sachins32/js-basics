// falsy values are --> undefined, null, '', false, 0, NaN

function countTruthy(array) {
    let count = 0;
    for(let value of array)
        if(value) 
            count++;
    return count;
}

let truthy = [1, 2, 3, 0, undefined]
console.log(countTruthy(truthy));