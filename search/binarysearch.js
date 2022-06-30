// Title: Binary search 
// Complexity: O(log n)
// Hint: Works only in a sorted array.
//       Compare the target value with the middle element of the array.
//       If it is not equal to the searched element and is smaller than it, 
//       then the search continues on the left side of the array (again, taking the middle element and comparing it to the target element). 
//       Otherwise look for the element in the right part of the array.
//       If the search ends with the remaining half being empty, the target is not in the array.

/** 
*@param {array} list Sorted array
*@param {element} item Target value
*@returns {element} Searched element
*/
function binarySearch(list, item) {       
  let low = 0;                            
  let high = list.length - 1;                                        
                                                                             
  while (low <= high) {                  
    let mid = Math.floor( low + ((high - low) / 2)); 
    let guess = list[mid];

    if (guess === item) {
      return mid;
     }
    else if (guess < item) {                  
      low = mid + 1;
    } else {                              
      high = mid - 1;
    }
  }

  return null;
}
