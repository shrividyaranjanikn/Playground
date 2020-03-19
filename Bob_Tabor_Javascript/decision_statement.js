// Types of decision statements

// if statement , else if statement
//Example 1
var count = 4;
if (count == 4){
    console.log(' Count is 4');
}
else if(count > 4){
    console.log('Count is greater than 4');
}
else if(count < 4)
{
    console.log('Count is less than 4');
}
else{
    console.log('Count is not 4');
}

// Example 2
let name = 'Alex';
if(name != 'Alex'){
    console.log('Enter the correct name');
}
else{
    console.log('Hello! Welcome Alex!');
}

// Switch statement
let name1 = 'Alice';
switch(name1) {
    case 'Alice':
        console.log('Alice is a good girl');
        break;
    case 'Ben':
        console.log('Ben is a good boy');
        break;
    case 'Marry':
        console.log('Marry is a good girl');
        break;
    default:
        console.log('No data');
        break;
}

// Ternary operator
let a =1, b = '1';
let result = (a == b) ? 'equal' : 'inequal'; // Checks if both the values are equal
console.log(result);
let compare = (a === b) ? 'equal' : 'inequal'; // Checks the value as well as the datatype of the values
console.log(compare);