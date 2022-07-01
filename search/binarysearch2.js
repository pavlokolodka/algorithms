// Title: Binary search 
// Complexity: Time: O(log n)
//             Space: O(log n)
// Hint: Works only in a sorted array.
//       Compare the target value with the middle element of the array.
//       If it is not equal to the searched element and is smaller than it, 
//       then the search continues on the left side of the array (again, taking the middle element and comparing it to the target element). 
//       Otherwise look for the element in the right part of the array.
//       If the search ends with the remaining half being empty, the target is not in the array.

/** 
*@param {array} list Sorted array
*@param {element} item Target value
*@param {element} low Start element of array
*@param {element} high Last element of array
*@returns {element} Searched element
*/
function binarySearch(list, item, low = 0, high = list.length - 1) {       
  if (low <= high) {
    let mid = Math.floor( low + ((high - low) / 2)); 
    
    if (list[mid] === item) return mid;

    if (list[mid] < item) return binarySearch(list, item, mid + 1, high);

    return binarySearch(list, item, low, mid - 1);
  }                                      

  return -1;
}
