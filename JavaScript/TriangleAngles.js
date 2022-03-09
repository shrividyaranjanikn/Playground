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
    const readline = require('readline').createInterface({
        input: process.stdin,
        output: process.stdout
      });
       
      readline.question('Who are you?', name => {
        console.log(`Hey there ${name}!`);

        readline.question('What are you?', type => {
            console.log(`Your type: ${type}`);
            readline.close();
        })
      });



      
}

anglesOfTriangle();