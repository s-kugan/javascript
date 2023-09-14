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

/****************************answer*************************************************************************
Iterate through the string, if the character is already in the map, update the start index to the value of the character in the map
Update the max length to be the current index minus the start index Return the max length
******************************************************************************************************************/

const findlongestSubstring = (str) => {
  let max = 0;
  let start = 0;
  let map = {};

  for (let i = 0; i < str.length; i++) {
    if (map[str[i]] > start) {
      start = map[str[i]];
      map[str[i]] = i;
      max = Math.max(max, i - start + 1);
    }
  }
  return max;
};

console.log(findlongestSubstring("pwwkew"));
