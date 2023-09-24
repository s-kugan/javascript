/***********************largest number of an array [3, 10, 2, 44, 5, 1] *************************/

let noarray = [3, 10, 2, 44, 5, 1];

const findlargest = (noarray) => {
  let largest = 0;
  for (let i = 0; i < noarray.length; i++) {
    if (noarray[i] > largest) {
      largest = noarray[i];
    }
  }

  return largest;
};

console.log(findlargest([3, 10, 2, 44, 5, 1]));
