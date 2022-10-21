// Title: Contains Duplicate II
// Problem: https://leetcode.com/problems/contains-duplicate-ii/
// Complexity: depends on approach
// Hint: Use hash table (preferred) or brute force


// Brute force - runtime 5711ms, memory usage 50,7 MB
// Complexity:
// Time: O(n^2), because O( ((n * (n + 1)) / 2) ) (it's a binomial coefficient of triangular number) ~ O(n^2) 
// Space: O(1) 
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
 var containsNearbyDuplicate = function(nums, k) {
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[j] === nums[i]) {
        if (Math.abs(j - i) <= k) return true;
      }
    }
  }
  return false;
}

// Hash table - runtime 173ms, memory usage 67,4 MB
// Complexity:
// Time: O(n) - one for loop
// Space: O(n) - storing hash table
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var containsNearbyDuplicate = function(nums, k) {
  const hasmap = new Map();
  for (let idx = 0; idx < nums.length; idx++) {
      // Check if the difference betweend duplicates is less than k
      if (idx - hasmap.get(nums[idx]) <= k) {
          return true;
      }
      // Save index
      hasmap.set(nums[idx], idx);
  }
  return false;
};