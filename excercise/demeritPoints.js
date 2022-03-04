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