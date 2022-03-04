// for-of loop, very similar to for-in loops
// But instead of 'in' keyword, we use 'of' keyword

const colors = ['red', 'green', 'blue'];

for (let index of colors){
    console.log(index);
}

for (let color of colors){
    console.log(color);
}

// we don't have to deal with the index, no need to access using index as in for-in loop