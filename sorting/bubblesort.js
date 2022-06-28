// Title: Bubble sort
// Complexity: O(n^2)
// Hint: Go through the whole array and compare adjacent elements and swap them if they are in the wrong order
 
/** 
*@param {array} array Unsorted array
*@returns {array} Sorted array
*/
function bublleSort(array) {                                  
  for (let n = 0; n < array.length; n++) {                    
    for (let i = 0; i < array.length - 1 - n; i++) {          
      if (array[i] > array[i + 1]) {                          
        let temp = array[i]
        array[i] = array[i + 1]
        array[i + 1] = temp
      }
    }
  }

  return array
}
