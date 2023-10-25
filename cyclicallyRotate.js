//program to cyclically rotate an array by one

/**************************************************************
    Input: arr[] = {1, 2, 3, 4, 5}
    Output: arr[] = {5, 1, 2, 3, 4}

    Input: arr[] = {2, 3, 4, 5, 1}
    Output: {1, 2, 3, 4, 5}

    Follow the steps to solve the problem:

    Store the last element in any temp variable
    Shift every element one position ahead
    Assign first value = last value (stored in temp variable).

*****************************************************************/

const cyclicallyRotate = (numarray) => {
  let temp = numarray[numarray.length - 1];

  for (let i = numarray.length - 1; i > 0; i--) {
    numarray[i] = numarray[i - 1];
  }

  numarray[0] = temp;

  return numarray;
};

console.log(cyclicallyRotate([1, 2, 3, 4, 5, 6]));
