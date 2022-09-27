// Title: Reverse array
// Complexity: Time: O(n)
//             Space: O(1)
// Hint: 1. Begin from start and end of the array to half of the array.
//       2. Swapp current element. 
//       3. Continue the next iteration.
 
/**  
*@param {array} array Input array
*@returns {array} Reversed array
*/
function reverse(array) {
  for (let i = 0, j = array.length - 1; i < array.length / 2; i++, j--) {
    let temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }

  return array;
}

//console.log(reverse(Array.from(new Array(10).keys())))