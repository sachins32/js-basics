let i = 0;
while(i <= 10) {
    if(i === 5){
        break;
    }
    console.log(i);
    i++;
}

let x = 0;
while(i <=10) {
    if(i % 2 === 0) {
        i++;
        continue;
    }

    console.log(i);
    i++;
}

// continue is not recommended to use
// break --> jump out of a loop
// continue --> jump to the next iteration