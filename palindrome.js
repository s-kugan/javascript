/**********************************************************
 * This code will verify the given text is Palindrome or not 
 * If the given text is palindrome , It will return true
 * If thr given text is not palindrome, It will return false
 * *********************************************************/



/* let palindrome = async (word)=>{

let reversedtext = "";

        for (let i=word.length-1;i>=0;i--){
            reversedtext += word[i];
        }

        console.log('reversedtext***',reversedtext);

        if (reversedtext==word){
            return true
        }

        return false;
} */

let palindrome = async (text) => {
    let reversedstring = "";

    for (let i = text.length - 1; i >= 0; i--){
        reversedstring += text[i];
    }

    if (text == reversedstring) {
        console.log('true');
        return true
    }
    else {
        console.log('false');
        return false;
    }
}



palindrome('madam');