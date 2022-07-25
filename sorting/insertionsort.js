// Title: Insertion sort
// Complexity: Time: O(n^2)
//             Space: O(1)
// Hint: 1. Go through the whole array, compare the current element and its predecessor.
//       2. If the current element is smaller than the previous one, move the previous one in place of the current one. 
//       3. Continue comparing the current element with the previous one.
//       4. Go to step 2 or continue iterating depending on the situation 3.
 
/** 
*@param {array} array Unsorted array
*@returns {array} Sorted array
*/
function insertionSort(array) {
  for (let i = 1; i < array.length; i++) {
    const current = array[i];
    let j = i;

    while (j > 0 && array[j - 1] > current) {
      array[j] = array[j - 1];
      j--;
    }
    array[j] = current;
  }
  
  return array;
}



 