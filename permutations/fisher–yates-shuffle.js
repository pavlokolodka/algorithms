// Title: Fisher–Yates shuffle (Knuth)
// Complexity: Time: O(n)
//             Space: O(1)
// Hint: 1. Go through the whole array.
//       2. Take a new index in the range from 0 to i.  
//       3. Swap the current element and the element with the new index
//       3. Continue the next iteration.
 
/**  
*@param {array} array Input array
*@returns {array} Shuffled array
*/    
function shuffle(array) {                       
  for (let i = array.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [ array[i], array[j] ] = [ array[j], array[i] ];
  }

  return array;
}


