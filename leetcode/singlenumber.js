// Title: Single Number
// Problem: https://leetcode.com/problems/single-number/
// Complexity: Time: O(n)
//             Space: O(n)
// Hint: 1. Create a hash table to store the number of incoming array elements
//       2. Iterate over the whole array:
//          if the element is in an array, assign to its key in the hash table the number of occurrences in the array
//       3. The element with 1 occurrence is the answer

/**  
*@param {number} nums Input array
*@returns {number} First numRows of Pascal's triangle
*/   
const singleNumber = function(nums) {
  const hash = {};
  
  for (const el of nums) {
      hash[el] = hash[el] + 1 || 1; // undefined + 1 == NaN => false || 1;
  }
  
  for (const key in hash) {
      if (hash[key] === 1) return key;
  }
};

// Another solution
// Complexity: Time: O(n)
//             Space: O(n)
const singleNumber = function(nums) {
    return nums.filter(e => nums.indexOf(e) === nums.lastIndexOf(e));
};