// Write a program to find maximum between three numbers.

function maxOfThree (x,y,z){
    if(x > y && x > z){
        console.log("x is greater than y and z");
    }

    else if(y > x && y > z){
        console.log("y is greater than x and z");
    }

    else{
        console.log("z is greater than x and y");
    }
} 

maxOfThree(18,4,90);