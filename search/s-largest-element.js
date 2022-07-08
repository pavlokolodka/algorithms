// Title: Second largest element in an array
// Complexity: Time: O(n)
//             Space: O(1)
// Hint: Create variables first and second and initialize them with the first element of the array and the minimum number respectively.
//       Go through the array and if the current element is larger than first, then update first and second, 
//       else if the current element is larger than second then update second 

/** 
*@param {array} array Input array
*@returns {element} Second maximum element
*/
function nextMaxElement(array) {
  let first = array[0];
  let second = Number.MIN_VALUE;

  for (let i = 1; i < array.length; i++) {
    if (first < array[i]) {
      second = first;
      first = array[i];
    }
    else if (second < array[i] && array[i] !== first) {
      second = array[i];
    }
  }

  return second;
}
