// Title: Quicksort (Hoare partition scheme - https://en.wikipedia.org/wiki/Quicksort#Hoare_partition_scheme)
// Complexity: Time: O(n^2) - while loop O(n) + recursive function call O(n), but in average O(n log(n)) https://en.wikipedia.org/wiki/Quicksort#Choice_of_pivot
//             Space: O(n) - storing recursive function call frame O(n)
// Hint: Main aglorithm sorts a (portion of an) array, divides it into partitions, then sorts those;
//       partition algorithm divides array into two partitions - less than pivot and greater than pivot
 
/** 
*@param {array} array Unsorted array
*@param {number} left Beginning index of an array
*@param {number} right End index of an array
*@returns {array} Sorted array
*/
function quickSort(array, left = 0, right = array.length - 1) {
    if (left >= 0 && right >= 0 && left < right) {
      const pivotIndex = partition(array, left, right);
     
      quickSort(array, left, pivotIndex);
      quickSort(array, pivotIndex + 1, right);
    }
  
    return array;
  }
  
  /** 
   * Sorted element by pivot
  *@param {array} items 
  *@param {number} left 
  *@param {number} right 
  *@returns {number} pivot index
  */
  function partition(array, left, right) {
    const pivot = array[Math.floor((left + right) / 2)];
    let i = left - 1;
    let j = right + 1;
    
    while (true) {
      do {
          i++;
      } while (array[i] < pivot);
  
      do {
          j--;
      } while (array[j] > pivot);
  
      if (i >= j) {
        return j;
      }
  
      swap(array, i, j);
    }
  }
  
  /** 
   * Swaps two elements in array
  *@param {array} items 
  *@param {number} leftIndex 
  *@param {number} rightIndex 
  *@returns {void} 
  */
  function swap(items, leftIndex, rightIndex){
    const temp = items[leftIndex];
    items[leftIndex] = items[rightIndex];
    items[rightIndex] = temp;
  }