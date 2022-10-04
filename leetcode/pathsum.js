// Title: Path Sum
// Problem: https://leetcode.com/problems/path-sum/
// Complexity: Time: O(n)
//             Space: O(n)
// Hint: 1. Iterative:
//          Use the stack to keep track of the current processing node and the difference between the previous sum and the current node value
//          When we have reached the node leaf and the difference is 0 => we have found the right path
// 
//       2. Recursive:
//          We have 2 base cases: 
//          1 - if there is no root(current node) (case of root.left === null || root.right === null) - return false
//          2 - if there is no left node and no right node (case of leaf node) => check if current node.value == targetSum
//
//          Recursive case: we check the left and right nodes sequentially
//          and take targetSum as result of calculating: targetSum - current node.value     
 
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * Return true if the three has a root-leaf path 
 * such sum of all values along the path == targetSum
 * @param {TreeNode} root
 * @param {number} targetSum
 * @return {boolean}
 */
// Approach 1 - iterative DFS
var hasPathSum = function(root, targetSum) {
    
  if (!root) return false;
  
  const stack = [[root, targetSum]];
  
  while (stack.length > 0) {
    const [node, prevSum] = stack.pop();
    const newSum = prevSum - node.val;
    
    if (!node.left && !node.right && newSum === 0) return true;
    
    if (node.left) stack.push([node.left, newSum]);
    if (node.right) stack.push([node.right, newSum]);
  }
  
  return false;
};

// Approach 2 - recursive DFS
var hasPathSum = function(root, targetSum) {
  if (!root) return false; 
  
  if (!root.left && !root.right) return targetSum === root.val; 
  
  return hasPathSum(root.left, targetSum - root.val) || hasPathSum(root.right, targetSum - root.val); // return order isn't important(first left or first right)     
  };