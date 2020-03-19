// Array declaration and initialization
// Array of integers
let a = [4,8,2,34,56];
// Array of strings
let b = ['Eddie','Harpie','Sharpie','Alex'];
// Array of different datatypes
let c = [6,'Hello','false'];

// Printing the whole array onto the console
console.log(a);
console.log(b);
console.log(c);
// Printing a specific value from the array using index number
console.log(a[0]);
console.log(a[1]);

// Modifying the array using index number
a[0]=7;
console.log(a);

// Obtaining the length of the array
console.log(a.length);

// Adding an element to an array
a[5]=19;
console.log(a);
console.log(a.length);

// Adding element to the end of the array
a.push(91);
console.log(a);
//Removing element from the end of the array
a.pop();
console.log(a);
a.pop();
console.log(a);
console.log(a.length);

// Adding and removing elements in the array using push and pop functions
let g = [];
g.push(1);
g.push(15);
g.push(8);
g.push(65);
g.push(7);
g.push(23);
console.log(g);
g.pop();
g.pop();
console.log(g);