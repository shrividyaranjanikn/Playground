// Write a program to check whether a number is negative, positive or zero.

function typeOfNumber(x){
    if(x < 0){
        console.log(`${x} is negative`);
    }
    else if(x == 0){
        console.log(`${x} is zero`);
    }
    else{
        console.log(`${x} is positive`);
    }
}

typeOfNumber(10);
typeOfNumber(-45);
typeOfNumber(0);
