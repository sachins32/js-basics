// width > height --> Landscape
// else not

function isLandscape(width, height) {
    return (width > height) ? true : false;
}

// Better Code 

function isLandscapebettercode(width, height) {
    return (width > height);
}

console.log(isLandscape(800, 600));
console.log(isLandscape(600, 800));

console.log(isLandscapebettercode(800, 600));
console.log(isLandscapebettercode(600, 800));