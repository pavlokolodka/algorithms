// Title: Delete Node in a Linked List
// Problem: https://leetcode.com/problems/delete-node-in-a-linked-list/
// Complexity: Time: O(1)  
//             Space: O(1) 
// Hint: Reassign the next node to given one(change link and value)
//  

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} node
 * @return {void} Do not return anything, modify node in-place instead.
 */
 var deleteNode = function(node) {
  let nextNode = node.next;
  node.val = nextNode.val;
  node.next = nextNode.next;
  nextNode.next = null;
};