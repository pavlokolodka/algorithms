// Title: Merge sort
// Complexity: Time: O(n*log(n))
//             Space: O(n)   
// Hint: 1. Divide the unsorted list into n sublists, each containing one element (a list of one element is considered sorted).
//       2. Repeatedly merge sublists to produce new sorted sublists until there is only one sublist remaining. This will be the sorted list.
 
/** 
*@param {element} left Left unsorted array
*@param {element} right Right unsorted array
*@returns {array} Merged sorted array
*/
function merge(left, right) {
  const arr = [];

  while (left.length && right.length) {
    if (left[0] < right[0]) {
      arr.push(left.shift());  
  } else {
      arr.push(right.shift());
  }
}
  return [ ...arr, ...left, ...right ];
}

/** 
*Merge function is required 
*@param {array} array Unsorted array
*@returns {array} Sorted array
*/
function mergeSort(array) {
  const half = array.length / 2;

  if (array.length < 2) {
    return array; 
  }

  const left = array.splice(0, half);

  return merge(mergeSort(left), mergeSort(array))
} 
