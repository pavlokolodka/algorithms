// Title: Largest element in an array
// Complexity: Time: O(n)
//             Space: O(1)
// Hint: Take a max variable and initialize it with the first element of the array. 
//       Go through the array and if the element is larger than the current max, 
//       assign it to the max variable, otherwise keep searching.  

/** 
*@param {array} array Input array
*@returns {element} Maximum element
*/
function maxElement(array) {
  let max = array[0];

  for (let i = 1; i < array.length; i++) {
    if (max < array[i]) {
      max = array[i];
    }
  }

  return max;
}
