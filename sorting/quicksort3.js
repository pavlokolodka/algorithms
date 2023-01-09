// Title: Quicksort (Hoare partition scheme - https://en.wikipedia.org/wiki/Quicksort#Hoare_partition_scheme)
// Complexity: Time: O(n^2) - while loop O(n) + recursive function call O(n), but in average O(n log(n)) (with the middle element as the pivot) https://en.wikipedia.org/wiki/Quicksort#:~:text=With%20the%20middle%20element%20as%20the%20pivot%2C%20however%2C%20sorted%20data%20results%20with%20(almost)%20no%20swaps%20in%20equally%20sized%20partitions%20leading%20to%20best%20case%20behavior%20of%20Quicksort%2C%20i.e.%20O(n%20log(n))
//             Space: O(n) - storing recursive function call frame O(n)
// Hint: Main aglorithm sorts a (portion of an) array, divides it into partitions, then sorts those;
//       partition algorithm divides array into two partitions - less than pivot and greater than pivot
 
/** 
*@param {array} array Unsorted array
*@param {number} left Beginning index of an array
*@param {number} right End index of an array
*@returns {array} Sorted array
*/
function quickSort(items, left, right) {
    if (items.length > 1) {
        let index = partition(items, left, right); 
        
        if (left < index - 1) { 
            quickSort(items, left, index - 1);
        }
        if (index < right) { 
            quickSort(items, index, right);
        }
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
    let pivot   = items[Math.floor((right + left) / 2)], 
        i       = left,
        j       = right; 

    while (i <= j) {
        while (items[i] < pivot) {
            i++;
        }
        while (items[j] > pivot) {
            j--;
        }
        if (i <= j) {
            swap(items, i, j); 
            i++;
            j--;
        }
    }
    
    return i;
}

