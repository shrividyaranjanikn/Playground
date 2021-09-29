// Write a program to input angles of a triangle and check whether triangle is valid or not.

function isValidTriangle(result) {

    anglesOfTriangle();

    if(result == 180){
        console.log("This is a valid triangle.");
    }

    else{
        console.log("This is not a valid triangle.");
    } 
}

function anglesOfTriangle() {
    const readline = require('readline');
    let r1 = readline.createInterface({
        input: process.stdin,
        output: process.stdout
      });

    let r2 = readline.createInterface({
        input: process.stdin,
        output: process.stdout 
    });

    let r3 = readline.createInterface({
        input: process.stdin,
        output: process.stdout 
    });
      r1.question('Enter the first angle: ', (angle1) => {
        r2.question('Enter the second angle: ', (angle2) => {
            r3.question('Enter the third angle: ', (angle3) => {
                let result = (+angle1) + (+angle2) + (+angle3);
            })})
      });
}

isValidTriangle();