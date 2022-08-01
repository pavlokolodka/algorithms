// Title: Selection sort
// Complexity: Time: O(n^2)
//             Space: O(1)
// Hint: 1. Go through the whole array.
//       2. Find the minimal element in the unsorted part of the array. 
//       3. Place the minimal element in the sorted part of the array (swap min el. and current el.). 
//       4. Continue the next iteration.
 
/**  
*@param {array} array Unsorted array
*@returns {array} Sorted array
*/
function selectionSort(array) {
  for (let i = 0; i < array.length - 1; i++) {
    let current = currentMin = i;
    let j = i + 1;
    
    for (; j < array.length; j++) {
      if (array[currentMin] > array[j]) {
        currentMin = j;
      }
    }
    
    if (current !== currentMin) {
      let temp = array[currentMin];
      array[currentMin] = array[current];
      array[current] = temp;
    }
    
  }
  return array;
}

