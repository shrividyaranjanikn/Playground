// Write a program to check whether an alphabet is vowel or consonant using switch case.

function isVowelOrConsonant(character) {

    switch(character){
        
        case 'a':
            console.log(`${character} is a vowel!`);
            break;
        
        case 'A':
            console.log(`${character} is a vowel!`);
            break;

        case 'e':
            console.log(`${character} is a vowel!`);
            break;

        case 'E':
            console.log(`${character} is a vowel!`);
            break;

        case 'i':
            console.log(`${character} is a vowel!`);
            break;
        
        case 'I':
            console.log(`${character} is a vowel!`);
            break;

        case 'o':
            console.log(`${character} is a vowel!`);
            break;
        
        case 'O':
            console.log(`${character} is a vowel!`);
            break;
        
        case 'u':
            console.log(`${character} is a vowel!`);
            break;

        case 'U':
            console.log(`${character} is a vowel!`);
            break;
        
        default:
            console.log(`${character} is a consonant!`);
    }
}

isVowelOrConsonant('a');
isVowelOrConsonant('r');
isVowelOrConsonant("I");