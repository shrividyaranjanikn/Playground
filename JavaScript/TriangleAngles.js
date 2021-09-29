// Write a program to input angles of a triangle and check whether triangle is valid or not.

function isValidTriangle(angle1, angle2, angle3) {

    if(angle1 + angle2 + angle3 == 180){
        console.log("This is a valid triangle.");
    }

    else{
        console.log("This is not a valid triangle.");
    }
}

const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  });

  readline.question('Enter the number of units: ', angle1 => {
    console.log(`The first angle of a triangle is ${angle1}!`);
    readline.close();
  });

  readline.question('Enter the number of units: ', angle2 => {
    console.log(`The first angle of a triangle is ${angle2}!`);
    readline.close();
  });

  readline.question('Enter the number of units: ', angle3 => {
    console.log(`The first angle of a triangle is ${angle3}!`);
    readline.close();
  });

  