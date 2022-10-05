// Title: Add One Row to Tree
// Problem: https://leetcode.com/problems/add-one-row-to-tree/
// Complexity: Time: O(n) - A total of n nodes of the given tree will be considered.
//             Space: O(n) - The depth of the recursion tree can go up to n in the worst case(skewed tree).
// Hint: Use recursive DFS algorithm to find (depth - 1) depth 
//       and then create new node(s) and reassign links from the created node(s) to the next nodes in the binary tree

 
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} val
 * @param {number} depth
 * @return {TreeNode}
 */
var addOneRow = function(root, val, depth) {
  if (depth === 1) {
    let node = new TreeNode(val);
    node.left = root;
    return node;
  }
  
  const dfs = (root, val, depth, currDepth) => {
    if (!root) return;
    
    if (currDepth === depth - 1) {
      let temp = root.left;
      root.left = new TreeNode(val);
      root.left.left = temp;
      temp = root.right;
      root.right = new TreeNode(val);
      root.right.right = temp;
    }
    
    dfs(root.left, val, depth, currDepth + 1);
    dfs(root.right, val, depth, currDepth + 1);
  }
  
  dfs(root, val, depth, 1);
  return root;
} 