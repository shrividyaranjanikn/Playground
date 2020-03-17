let a = 'first'; // scope is throughout the program 

function scopeTest(){
    console.log(a);
    let b = 'second'; // Available only inside the function (scope is only within the function)
}

scopeTest();
// console.log(b);  ' b is not defined' will be displayed as its scope is only within the function
