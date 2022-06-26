// Title: Quicksort
// Complexity: O(n*log(n))
// Hint: Select pivot element from the array and divide the remaining elements into two subarrays: less than pivot, pivot, and bigger than pivot
 
/** 
*@param {array} array Unsorted array
*@returns {array} Sorted array
*/
const quickSort = array => {
  if (array.length < 2) return array;
  const pivot = array[0];
  const keysAreLessPivot = array.slice(1).filter(key => key <= pivot);
  const keysAreMorePivot = array.slice(1).filter(key => key > pivot);
  return [
    ...quickSort(keysAreLessPivot),
    pivot,
    ...quickSort(keysAreMorePivot)
  ];
};

