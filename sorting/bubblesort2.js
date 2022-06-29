// Title: Optimized bubble sort
// Complexity: O(n^2)
// Hint: Create a new variable swapped. The value of swapped is set true if there occurs swapping of elements. Otherwise, it is set false. 
//       Go through the whole array, compare adjacent elements and swap them if they are in the wrong order. 
//       If the current iteration does not change the order=> all elements are already in their places. 
 
/** 
*@param {array} array Unsorted array
*@returns {array} Sorted array
*/
function bublleSort(array) {                                  
  for (let n = 0; n < array.length; n++) {            
    let swapped = false;    

    for (let i = 0; i < array.length - 1 - n; i++) {      
      if (array[i] > array[i + 1]) {                          
        let temp = array[i];
        array[i] = array[i + 1];
        array[i + 1] = temp;

        swapped = true;
      } 
    }
   
    if (swapped === false) break;
  }

  return array
}
