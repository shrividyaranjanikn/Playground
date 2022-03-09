function checkPalindrome(inputString) {
    let stringArray = inputString.split('');
    let validPalindrome = true;
    let stringLen = stringArray.length;

    for(let i=0,j=stringLen -1; i<j; i++,j--){
        if(stringArray[i] != stringArray[j]){
            validPalindrome = false;
        }
    }
    return validPalindrome;
}

checkPalindrome("abac");
