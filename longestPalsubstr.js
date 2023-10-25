/******************************************************************
  Longest Palindromic Substring

    Given a string s, return the longest 
    palindromic
    
    substring
    in s.

    

    Example 1:

    Input: s = "babad"
    Output: "bab"
    Explanation: "aba" is also a valid answer.
    Example 2:

    Input: s = "cbbd"
    Output: "bb"
    

    Constraints:

    1 <= s.length <= 1000
    s consist of only digits and English letters.

    Follow the steps mentioned below to implement the idea:

    Generate all the substrings.
    For each substring, check if it is palindrome or not.
    If substring is Palindrome, then update the result on the basis of longest palindromic substring found till now. 
 
 ******************************************************************/

const longestPalindromic = (str) => {
  let longest = "";

  function isPal(str, left, right) {
    while (left >= 0 && right < str.length && str[left] === str[right]) {
      left--;
      right++;
    }

    return str.slice(left + 1, right);
  }

  for (let i = 0; i < str.length; i++) {
    let oddpal = isPal(str, i, i);
    let evenpal = isPal(str, i, i + 1);
    let longestpal = oddpal.length > evenpal.length ? oddpal : evenpal;
    if (longestpal.length > longest.length) {
      longest = longestpal;
    }
  }

  return longest;
};

console.log(longestPalindromic("babad"));
