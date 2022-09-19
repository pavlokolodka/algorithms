// Title: Pascal's triangle
// Problem: https://leetcode.com/problems/pascals-triangle/
// Complexity: Time: O(n^2)
//             Space: O(n^2)
// Hint: 1. Each number is the sum of the two numbers directly above it 
//       2. For each iteration create temp array with zeros for convenient calculation of the sum of two elements of the previous array element (array[-1])
//       3. Calculate the sum of two elements of the temporal array from left to right one by one
//       4. Create row array and add the result of adding two elements to this array
//       5. Finally, add the row array as an element of result array
 
/**  
*@param {number} numRows Input array
*@returns {number[][]} First numRows of Pascal's triangle
*/   
const generate = function(numRows) {
  const arr = [[1]];

  for (let i = 0; i < numRows - 1; i++) {
    let temp = [0, ...arr[arr.length - 1], 0];
    let row = [];

    for (let j = 0; j < arr[arr.length - 1].length + 1; j++) {
      row.push(temp[j] + temp[j + 1]);
    }
    
    arr.push(row);
}
  
  return arr;
};