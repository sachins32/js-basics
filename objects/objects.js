// Objects are collection of key value pairs

const circle = {
    radius: 1,
    location: {
        x: 1,
        y: 1
    },
    isVisible: true,
    draw: function() { // --> In OOP Its called method --> function part of object is called method
        console.log('draw');
    }

};

// Value can be any type in JavaScript, it can be a number, 
// String, boolean, null, undefined, it can even be another object
// or function(functions related to the object) or an array.

circle.draw();

// Object oriented programming (OOP)