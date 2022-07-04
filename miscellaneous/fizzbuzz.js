// Title: Fizz Buzz 
// Complexity: Time: O(100)
//             Space: O(101)
// Hint: for multiples of "3" print "Fizz" instead of a number, 
//       and for multiples of "5" print "Buzz". 
//       If multiples of 3 and 5 print "FizzBuzz"

/** 
*@param {array} arr Empty array of 100 elements
*@returns {element} List of Fizz Buzz
*/
function fizzBuzz(arr) {
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] % 5 === 0 && arr[i] % 3 === 0) {
      arr[i] = 'FizzBuzz';
    } else if (arr[i] % 5 === 0) {
       arr[i] = 'Buzz';
    } else if (arr[i] % 3 === 0) {
      arr[i] = 'Fizz';
    }
  }

  return arr.slice(1);
}
const array = Array.from(Array(101).keys())
