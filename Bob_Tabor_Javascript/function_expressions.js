// Using setTimeout function 

setTimeout(function () 
                 {
                     console.log('I waited for 5 seconds!'); 
                 }, 5000);

// Using function declaration and expression togehter


let counter = 0;
function time (){
    setTimeout(function (){
        console.log('Hi ' + counter++);
        time();
    }, 2000);
}

time(); 

// Calling a function

(function () {
    console.log('Immediately invoked function expression');
}) ();