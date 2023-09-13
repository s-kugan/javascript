/**********************************************************************
 we’re given two sorted arrays, and asked to merge them in order. 
 So, given two arrays with the values [1, 2, 4] and [1, 3, 4], 
 we should return a new array with values  [1,1,2,3,4,4].
 **********************************************************************/

const mergeTwoSortedArrays = function mergeTwo(arr1, arr2) {
  for (let i = 0; i < arr2.length; i++) {
    arr1.push(arr2[i]);
  }

  console.log("arr1***", arr1);
};

mergeTwoSortedArrays([(1, 2, 4)], [(1, 3, 4)]);
