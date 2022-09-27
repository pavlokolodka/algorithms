// Title:  Valid Palindrome
// Problem:  https://leetcode.com/problems/valid-palindrome/
// Complexity: Time: O(n)
//             Space: O(n)
// Hint: 1. Create regexp and filter the input array
//       2. Check the filtered array if it is a palindrome

/**  
*@param {string} s Input string
*@returns {boolean} Is a palindrome
*/  
const isPalindrome = function(s) {
  let res = s.replace(/[^a-z0-9]/gi, '').toLowerCase().split('').reverse().join('');
  let res1 = s.replace(/[^a-z0-9]/gi, '').toLowerCase().split('').join('');
  
  return res === res1;
  };

// Approach 2: Two Pointers from Outside
// Complexity: Time: O(n)
//             Space: O(1)
const isPalindrome = function(s) {
  s = s.replace(/[^A-Za-z0-9]/g, "").toLowerCase();
  let left = 0, right = s.length - 1;
  
  while (left < right) {
    if (s[left] !== s[right]) 
      return false;
    
    left++;
    right--;
  }
  
  return true;
};
  
// Approach 3: Two Pointers from Center
// Complexity: Time: O(n)
//             Space: O(1)
const isPalindrome = function(s) {
  s = s.replace(/[^A-Za-z0-9]/g, "").toLowerCase();
  
  let right = Math.floor(s.length / 2);
  let left = s.length % 2 === 0 ? right - 1 : right; 

  while (left >= 0 && right < s.length) {
    if (s[left] !== s[right]) 
      return false;

    left--;
    right++;
  }

  return true;
};  