// Title: Check if the Sentence Is Pangram
// Problem: https://leetcode.com/problems/check-if-the-sentence-is-pangram/
// Complexity: Time: O(n) - add every character to Set
//             Space: O(1) - use Set that contains 26 at most 26 unique lowercase letters
// Hint: Use Set data structure to store unique letters
 
/**
 * @param {string} sentence
 * @return {boolean}
 */
 var checkIfPangram = function(sentence) {
  return new Set(sentence).size === 26;
};