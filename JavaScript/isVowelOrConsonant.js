// Write a program to check whether an alphabet is vowel or consonant using switch case.

function isVowelOrConsonant(character) {

    switch(character){
        
        case 'a':
        case 'A':
        case 'e':
        case 'E':
        case 'i':
        case 'I':
        case 'o':
        case 'O':
        case 'u':
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