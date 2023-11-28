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
function quickSort(items, left = 0, right = items.length - 1) {
    if (left < right) {
        let index = partition(items, left, right); 

        quickSort(items, left, index - 1);

        quickSort(items, index, right);
    }

    return items;
}

/** 
 * Swaps two elements in array
*@param {array} items 
*@param {number} leftIndex 
*@param {number} rightIndex 
*@returns {void} 
*/
function swap(items, leftIndex, rightIndex){
    let temp = items[leftIndex];
    items[leftIndex] = items[rightIndex];
    items[rightIndex] = temp;
}

/** 
 * Sorted element by pivot
*@param {array} items 
*@param {number} left 
*@param {number} right 
*@returns {number} pivot index
*/
function partition(items, left, right) {
    let pivot = items[Math.floor((right + left) / 2)];

    while (left <= right) {
        while (items[left] < pivot) {
            left++;
        }
        while (items[right] > pivot) {
            right--;
        }
        if (left <= right) {
            swap(items, left, right); 
            left++;
            right--;
        }
    }
    
    return left;
}


