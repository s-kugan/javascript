/**************************************************************
Given an integer array nums, find the 
subarray
 with the largest sum, and return its sum.

Example 1:

Input: nums = [-2,1,-3,4,-1,2,1,-5,4]
Output: 6
Explanation: The subarray [4,-1,2,1] has the largest sum 6.
Example 2:

Input: nums = [1]
Output: 1
Explanation: The subarray [1] has the largest sum 1.
Example 3:

Input: nums = [5,4,-1,7,8]
Output: 23
Explanation: The subarray [5,4,-1,7,8] has the largest sum 23.
 

Constraints:

1 <= nums.length <= 105
-104 <= nums[i] <= 104

***********************************************************************/

const findmaxSubArray = (num) => {
  let sum = 0;
  let max = num[0];

  for (let i = 0; i < num.length; i++) {
    sum += num[i];

    if (sum > max) {
      max = sum;
    }
    if (sum < 0) {
      sum = 0;
    }
  }

  return max;
};

console.log(findmaxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4]));
console.log(findmaxSubArray([5, 4, -1, 7, 8]));
