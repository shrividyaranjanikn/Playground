function sayHello() { // Function declaration
    console.log('*****************');  // Body of function
    console.log('Hello');              // Body of function
    console.log('*****************');   // Body of function
}

sayHello(); // Calling the function

// Adding parameters to the function
function sayHi(name) { // Function declaration
    console.log('Hello '+ name + '!');              // Body of function
}

sayHi('Alice');
sayHi('Ben');

// Returning a value from a function

function calculate(value){
    let result = value * 10;
    return result;
}

let r = calculate(6);
console.log(r);

