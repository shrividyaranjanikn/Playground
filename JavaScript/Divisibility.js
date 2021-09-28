// Write a program to check whether a number is divisible by 5 and 11 or not.

function divisibility(x){
    if(x % 5 == 0 && x % 11 == 0){
        console.log(`${x} is divisible by 5 and 11`);
    }
    else{
        console.log(`${x} is not divisible by 5 and 11`);
    }
}

divisibility(9);
divisibility(55);
divisibility(10);