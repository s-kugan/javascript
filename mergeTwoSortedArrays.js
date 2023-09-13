/**********************************************************************
 we’re given two sorted arrays, and asked to merge them in order. 
 So, given two arrays with the values [1, 2, 4] and [1, 3, 4], 
 we should return a new array with values  [1,1,2,3,4,4].
 **********************************************************************/

/************Shortestway******************/
const sortTwoArrays = function (a, b) {
  let result = [...a, ...b].sort((a, b) => a - b);
  console.log("result****", result);
  return result;
};

sortTwoArrays([1, 2, 4], [1, 3, 4]);

/***********************Algorithm***************************/
const mergeTwoSortedArrays = (arr1, arr2) => {
  for (let i = 0; i < arr2.length; i++) {
    arr1.push(arr2[i]);
  }

  for (i = 0; i < arr1.length; i++) {
    for (let j = i + 1; j < arr1.length; j++) {
      if (arr1[i] > arr1[j]) {
        let temp = arr1[i];
        arr1[i] = arr1[j];
        arr1[j] = temp;
      }
    }
  }

  return arr1;
};

console.log(mergeTwoSortedArrays([1, 2, 3, 5, 9], [4, 6, 7, 8]));
