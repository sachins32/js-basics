//Find Average 
// 0 - 59 --> F
// 60 - 69 --> D
// 70 - 79 --> C
// 80 - 89 --> B
// 90 - 100 --> A

function calculateGrade(marks) {
    let average = 0;
    let sum = 0;

    for(let mark of marks)
        sum += mark;

    average = sum / marks.length;
    
    if(average >= 0 && average <= 59)
        console.log('F')

    if(average >=60 && average <= 69)
    console.log('D')

    if(average >= 70 && average <= 79)
    console.log('C')

    if(average >=80 && average <= 89)
    console.log('B')

    if(average >=90 && average <= 100)
    console.log('A')
}

let marks = [80, 80, 50];

calculateGrade(marks);


// Simplicity is the ultimate sophistication

function calculateGradeSimple(marks) {
    let sum = 0;

    for(let mark of marks)
        sum += mark;

    let average = sum / marks.length;
    
   if (average < 60) return 'F';
   if (average < 70) return 'D';
   if (average < 80) return 'C';
   if (average < 90) return 'B';
   return 'A';

}

console.log(calculateGradeSimple(marks));

// can also simplify by writing two seperate functions

function calculateAverage(array) {
    let sum = 0;
    for(let value of array)
        sum += value;
    return sum / array.length;
}

function calculateGrade(marks) {
    const average = calculateAverage(marks);
    if (average < 60) return 'F';
    if (average < 70) return 'D';
    if (average < 80) return 'C';
    if (average < 90) return 'B';
    return 'A';
}
