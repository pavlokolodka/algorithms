// Title: Largest Perimeter Triangle
// Problem: https://leetcode.com/problems/largest-perimeter-triangle/
// Complexity: Time: O(n*log(n)) - sorting algorithm
//             Space: O(1) 
// Hint: Non-zero aren treangle means the sum of any 2 sides is larger than the last side (a <= b <= c; a + b > c)
//       Use the sorting algorithm to sort the elements of input array and check from the end the basic condition
 
/**
 * @param {number[]} nums Lenghts of triangle
 * @return {number} The largest perimeter of triangle or 0 
 */
 var largestPerimeter = function(nums) { 
  nums.sort((a, b) => a - b);

  for (let i = nums.length - 1; i >= 2; i--) {
    let current = nums[i], second = nums[i - 1], third = nums[i - 2]; 
     
    if (current < second + third) return current + second + third;
  }

  return 0;
};