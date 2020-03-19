// for loop
// for (initialization ; condition ; increment/decrement){}

for (let z=0; z<10 ; z++){
    console.log(z);
}

// Using decision statements inside loops
for (j=0; j<10; j++){
    if(j==7){
        break;
    }
    console.log(j);
}

// Iterating through an arrow

let a = [1,5,9,4,15,42];
for (i=0; i<a.length; i++){
    console.log(a[i]);
}

// Copying elements of b to c

let b = [5,6,8,20,5,6,51];
for (j=0; j<b.length; j++){
    let c = b[j];
    console.log(c);
}
    
// while loop
// while(condition){}

let x = 0;
while(x < 10){
    console.log(x++);
}

while(x < 10){
    console.log(x++);
    if(x == 7){
        break;
    }
    else{
        continue;
    }
}