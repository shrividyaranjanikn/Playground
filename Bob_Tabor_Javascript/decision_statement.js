// Types of decision statements

// if statement , else if statement
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

// Switch statement
let name = 'Alice';
switch(name) {
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
let r = (a === b) ? 'equal' : 'inequal'; // Checks the value as well as the datatype of the values
console.log(r);