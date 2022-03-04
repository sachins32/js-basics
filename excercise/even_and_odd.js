function showNumbers(limit) {
    for(let i = 0; i <= limit; i++) {
        if(i % 2 === 0)
            console.log(i, "EVEN");
        else
            console.log(i, "ODD");
    }
}

// 2nd way

function showNumbers(limit) {
    for(let i = 0; i <= limit; i++) {
        const message = (i % 2 == 0) ? 'EVEN' : 'ODD';
        console.log(i, message);
    }
}
showNumbers(10);