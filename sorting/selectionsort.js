// Title: Selection sort
// Complexity: Time: O(n^2)
//             Space: O(n)
// Hint: 1. Go through the whole array, find the minimal element.
//       2. Place the minimal element in the sorted array. 
//       3. Continue the next iteration.
 
/** 
*Finds the smallest index 
*@param {array} array Unsorted array
*@returns {index} Smallest index
*/
const findSmallestIndex = (array) => {
  let smallestElement = array[0]; 
  let smallestIndex = 0; 

  for (let i = 1; i < array.length; i++) {
    if (array[i] < smallestElement) {
      smallestElement = array[i];
      smallestIndex = i;
    }
  }

  return smallestIndex;
};


/** 
*findSmallestIndex function is required  
*@param {array} array Unsorted array
*@returns {array} Sorted array
*/
const selectionSort = (array) => {
  const sortingArray = [...array];
  const sortedArray = [];
  const length = sortingArray.length;

  for (let i = 0; i < length; i++) { 
    const smallestIndex = findSmallestIndex(sortingArray);
    sortedArray.push(sortingArray.splice(smallestIndex, 1)[0]);
  }

  return sortedArray;
};
