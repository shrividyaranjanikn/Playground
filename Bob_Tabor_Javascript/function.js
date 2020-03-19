// Functions returning a function

// function returing a value

function one(){
    return 'one';
}

let result = one();
console.log(result);

let r = one;
console.log(typeof r);

let value = one;
console.log(value());

// Function returing a function
function two(){
    return function(){
        console.log('two');
    }
}

