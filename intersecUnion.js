//Find the Union and Intersection of the two sorted arrays

/**********************************************************

    Union and Intersection of two sorted arrays
    Read
    Discuss(190+)
    Courses
    Practice
    Video
    Given two sorted arrays, find their union and intersection.

    Example:

    Input: arr1[] = {1, 3, 4, 5, 7}
            arr2[] = {2, 3, 5, 6} 
    Output: Union : {1, 2, 3, 4, 5, 6, 7} 
            Intersection : {3, 5}

    Input: arr1[] = {2, 5, 6}
            arr2[] = {4, 6, 8, 10} 
    Output: Union : {2, 4, 5, 6, 8, 10} 
            Intersection : {6}

    The idea of the approach is to build a Set and insert all the elements from both arrays into it. 
    As a set stores only unique values, it will only keep all the unique values of both arrays.

*****************************************************************/

const findunioninter = (arr1, arr2) => {
  let result = [];

  for (let i = 0; i < arr1.length; i++) {
    for (let j = 0; j < arr2.length; j++) {
      if (arr1[i] == arr2[j]) {
        result.push(arr1[i]);
      }
    }
  }

  let intersection = [...new Set(result)];

  let unionarray = [...new Set([...arr1, ...arr2])];

  return {
    intersection,
    unionarray,
  };
};

console.log(findunioninter([1, 2, 2, 2, 3], [2, 3, 3, 4, 5, 5]));
