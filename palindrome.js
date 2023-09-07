/**********************************************************
 * This code will verify the given text is Palindrome or not
 * If the given text is palindrome , It will return true
 * If thr given text is not palindrome, It will return false
 * *********************************************************/

let palindrome = (word) => {
  let reversedtext = "";

  for (let i = word.length - 1; i >= 0; i--) {
    reversedtext += word[i];
  }

  if (reversedtext == word) {
    return true;
  }

  return false;
};

palindrome("madam");
