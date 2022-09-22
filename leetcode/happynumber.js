// Title: Happy Number
// Problem: https://leetcode.com/problems/happy-number/
// Complexity: depends on the approach
// Hint: 1. When calculating the happy number, we can have three situations
//          * The sum of the squares of all the numbers goes to 1
//          * Counting the sum gets stuck in the cycle
//          * It keeps going higher and higher, up towards infinity.
//        In practice, however, the last case will never happen because if the input number is less than infinity, then its sum will be exactly less than itself
//        For example:
//        If we have 3 digit number then the largest number that we can have is 999 => sum of the squeres is 234  
//        And we'll never get a number higher than that, even if we get stuck in a cycle. 

 
// Approach 1 using a hash table
// Complexity: Time: O(log n) - complexity of getNext function
//             Space: O(log n) - complexity of set
/**  
*@param {number} n Input number
*@returns {boolean} if n is a happy number or not
*/  
const isHappy = function(n) {
  function getNext(n) {
    let sum = 0;
    
    while (n > 0) {
      // use only an integer number to avoid an infinite loop
      let lastNum = Number.parseInt(n % 10);
      n = Number.parseInt(n / 10);
      sum += lastNum * lastNum;
    }
    
    return sum;
  }
  
  const hash = new Set();
  // if n in set => we are in a cycle case
  while (n !== 1 && !hash.has(n)) {
    hash.add(n);
    n = getNext(n);  
  }
  
  return n === 1;
};

// Approach 2: Floyd's Cycle-Finding Algorithm - Fast and Slow Pointer
// Complexity: Time: O(log n) - complexity of getNext function
//             Space: O(1)
/**  
*@param {number} n Input number
*@returns {boolean} if n is a happy number or not
*/  
const isHappy = function(n) {
  function getNext(n) {
    let sum = 0;
    
    while (n > 0) {
      let lastNum = Number.parseInt(n % 10);
      n = Number.parseInt(n / 10);
      sum += lastNum * lastNum;
    }
    
    return sum;
  }
  
  let slowRunner = n;
  let fastRunner = getNext(n);

  while (fastRunner !== 1 && slowRunner !== fastRunner) {
    slowRunner = getNext(slowRunner);
    fastRunner = getNext(getNext(fastRunner));  
  }
  
  return fastRunner === 1;
};

// Approach 3: Hardcoding 
// Complexity: Time: O(log n) - complexity of getNext function
//             Space: O(1)
/**  
*@param {number} n Input number
*@returns {boolean} if n is a happy number or not
*/ 
const isHappy = function(n) {
  function getNext(n) {
    let sum = 0;
    
    while (n > 0) {
      // use only an integer number to avoid an infinite loop
      let lastNum = Number.parseInt(n % 10);
      n = Number.parseInt(n / 10);
      sum += lastNum * lastNum;
    }
    
    return sum;
  }
  
  const hash = new Set([4, 16, 37, 58, 89, 145, 42, 20]); // hardcode a set containing numbers that lead into infinite cycle
  // if n in hash => we are in a cycle case               // or just do an alternative while loop:
  while (n !== 1 && !hash.has(n)) {                       // while (n != 1 && n != 4) {                                                                                                            
    n = getNext(n);                                       //     n = getNext(n); 
  }                                                       // }
  
  return n === 1;
};