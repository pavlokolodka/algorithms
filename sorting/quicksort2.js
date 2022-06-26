// Title: Quicksort
// Complexity: O(n*log(n))
// Hint: Select pivot element from the array and divide the remaining elements into two subarrays: less than pivot, pivot, and bigger than pivot
 
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



