// Title: Second smallest element in an array
// Complexity: Time: O(n)
//             Space: O(1)
// Hint: Create variables first and second and initialize them with the first element of the array and the maximum number respectively.
//       Go through the array and if the current element is smaller than first, then update first and second, 
//       else if the current element is smaller than second then update second 

/** 
*@param {array} array Input array
*@returns {element} Second minimum element
*/
function nextMinElement(array) {
  let first = array[0];
  let second = Number.MAX_VALUE;

  for (let i = 1; i < array.length; i++) {
    if (first > array[i]) {
      second = first;
      first = array[i];
    }
    else if (second > array[i] && array[i] !== first) {
      second = array[i];
    }
  }

  return second;
}
