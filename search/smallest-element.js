// Title: Smallest element in an array
// Complexity: Time: O(n)
//             Space: O(1)
// Hint: Take a min variable and initialize it with the first element of the array. 
//       Go through the array and if the element is smaller than the current min, 
//       assign it to the min variable, otherwise keep searching.  

/** 
*@param {array} array Input array
*@returns {element} Minimum element
*/
function minElement(array) {
  let min = array[0];

  for (let i = 1; i < array.length; i++) {
    if (min > array[i]) {
      min = array[i];
    }
  }

  return min;
}
