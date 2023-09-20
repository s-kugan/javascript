/******************************************************************************************************************
 Given an unsorted array of integers, find the number of subarrays having a sum exactly equal to a given number k.

Examples: 

Input : arr[] = {10, 2, -2, -20, 10}, k = -10
Output : 3
Explanation: Subarrays: arr[0…3], arr[1…4], arr[3..4] have a sum exactly equal to -10.

Input : arr[] = {9, 4, 20, 3, 10, 5}, k = 33
Output : 2
Explanation: Subarrays : arr[0…2], arr[2…4] have a sum exactly equal to 33.
****************************************************************************/

let arr = [10, 2, -2, -20, 10];
let k = -10;
let sum = 0;
let newarray = [];
let no;

const findsubarray = () => {
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];

    if (sum == k) {
      newarray.push[arr[i]];
    }
  }

  console.log(newarray.length);
};

findsubarray();
