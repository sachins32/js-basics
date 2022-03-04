// Speed limit 70km/hr
// < 70 --> Ok
// = 70 --> Ok
// For every 5km above the speed limit --> they get one point
// Use Math.floor() 
// more than 12 points -- Licence suspended

function checkSpeed(speed) {
    const speedLimit = 70;
    const kmPerPoint = 5;

    if(speed < speedLimit + kmPerPoint) 
        console.log('Ok');
    else {
        const points = Math.floor((speed - speedLimit) / kmPerPoint);
        if(points >= 12)
            console.log('License suspended');
        else
            console.log("Points ", points);
    }
}


checkSpeed(25);
checkSpeed(70);
checkSpeed(74);
checkSpeed(75);
checkSpeed(80);
checkSpeed(180);


// Better Code

// In the above program we have else block, this has caused indentation after else block, 
// It's not terribly a bad thing, But it's better to avoid indentation if we can.
// if condition is true we want to display ok on the console. Now to get rid of this else block
// and the indentation, you can add a block here, display Ok on the console and then return.
// So with this we'll jump out of this function, and none of the code in else block will be executed,
// So with this we can delete the else statement as well as the code block and remove the indentation.
function checkSpeed(speed) {
    const speedLimit = 70;
    const kmPerPoint = 5;

    if(speed < speedLimit + kmPerPoint) {
        console.log('Ok');
        return;
    }
    const points = Math.floor((speed - speedLimit) / kmPerPoint);
    if(points >= 12)
        console.log('License suspended');
    else
        console.log("Points ", points);

}