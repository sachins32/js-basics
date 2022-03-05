// To create object we can use two functions
// 1. Factory Functions
// 2. Constructor Functions


// Factory functions to create object

function createCircle(radius) {
    return {
        radius: radius,
        draw: function() { 
            console.log('draw');
        }
    
    };
}

//In modern Javascript If both key and value as in above program both are same then we can simply add key

function createCircles(radius) {
    return {
        radius, // Equivalent to --> radius: radius,
        draw() {
            console.log('draw');
        }
    };
}

const circle1 = createCircle(1);
console.log(circle1);
console.log(circle1.radius);
circle1.draw();

const circle2 = createCircles(2);
console.log(circle2);
console.log(circle2.radius);
circle2.draw();