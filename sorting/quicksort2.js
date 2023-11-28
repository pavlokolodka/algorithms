// Title: Quicksort
// Complexity: Time: O(n^2) - one for loop O(n) + recursive function call O(n); Worst case with unbalanced partitioning.
//             Space: O(n) - we use 2 arrays O(n) + storing recursive function call frame O(n); 
// Hint: Select the pivot element from the array and divide the remaining elements into two subarrays: less than the pivot, pivot, and bigger than the pivot
//       Repeat the same actions with subarrays.
 
/** 
*@param {array} array Unsorted array
*@returns {array} Sorted array
*/
const qsort = (array) => {
  if (array.length < 2) return array;
  
  const pivotPosition = Math.floor(Math.random() * array.length);
  const pivot = array[pivotPosition];

  let less = [];
  let greater = [];

  for (let i = 0; i < array.length; i++) {
    const isPivot = i === pivotPosition;

    if (array[i] <= pivot && !isPivot) {
      less.push(array[i])
    } else if (array[i] > pivot) {
      greater.push(array[i]);
    }
  }

  return [...qsort(less), pivot, ...qsort(greater)];
};



