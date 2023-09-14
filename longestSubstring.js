/****************************************************************************************
 Given a string s, find the length of the longest substring without repeating characters.

Example 1:
Input: s = "abcabcbb"
Output: 3
Explanation: The answer is "abc", with the length of 3.


Example 2:
Input: s = "bbbbb"
Output: 1
Explanation: The answer is "b", with the length of 1.

Example 3:
Input: s = "pwwkew"
Output: 3
Explanation: The answer is "wke", with the length of 3.
Notice that the answer must be a substring, "pwke" is a subsequence and not a substring.
*****************************************************************************************/

/****************************solution*************************************************************************
Iterate through the string, if the character is already in the map, update the start index to the value of the character in the map
Update the max length to be the current index minus the start index Return the max length
******************************************************************************************************************/

const findlongestSubstring = (str) => {
  let max = 0;
  let currString = "";
  let char;
  let pos;

  for (let i = 0; i < str.length; i++) {
    char = str.charAt(i);
    pos = currString.indexOf(char);
    if (pos !== -1) {
      currString = currString.substring(pos + 1);
    }
    currString += char;
    max = Math.max(max, currString.length);
  }
  return max;
};

console.log(findlongestSubstring("abcabcbb"));
console.log(findlongestSubstring("bbbbb"));
console.log(findlongestSubstring("pwwkew"));
