// Title: Quicksort (Hoare partition scheme - https://en.wikipedia.org/wiki/Quicksort#Hoare_partition_scheme)
// Complexity: Time: O(n^2) - while loop O(n) + recursive function call O(n), but in average O(n log(n)) (with the middle element as the pivot) https://en.wikipedia.org/wiki/Quicksort#:~:text=With%20the%20middle%20element%20as%20the%20pivot%2C%20however%2C%20sorted%20data%20results%20with%20(almost)%20no%20swaps%20in%20equally%20sized%20partitions%20leading%20to%20best%20case%20behavior%20of%20Quicksort%2C%20i.e.%20O(n%20log(n))
//             Space: O(n) - storing recursive function call frame O(n)
// Hint: Main aglorithm sorts a (portion of an) array, divides it into partitions, then sorts those;
//       Partition algorithm divides array into two partitions - less than pivot and greater than pivot
//       Additional if check in quickSort algorithm reduces the function call on average by half.
 
/** 
*@param {array} array Unsorted array
*@param {number} left Beginning index of an array
*@param {number} right End index of an array
*@returns {array} Sorted array
*/
function quickSort(items, left = 0, right = items.length - 1) {
    if (left < right) {
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

