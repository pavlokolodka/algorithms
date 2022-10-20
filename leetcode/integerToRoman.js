// Title: Integer to Roman
// Problem: https://leetcode.com/problems/integer-to-roman/
// Complexity: Time: O(log(n)) - complexity depends on the number of digits; see https://stackoverflow.com/questions/50261364/explain-why-time-complexity-for-summing-digits-in-a-number-of-length-n-is-ologn  
//             Space: O(1) 
// Hint: Use 2 arrays to map an integer number to a roman

/**
 * @param {number} num Integer
 * @return {string} Converted to roman number
 */
var intToRoman = function(num) {
  const int = [1000,900,500,400,100,90,50,40,10,9,5,4,1];
  const roman = ["M","CM","D","CD","C","XC","L","XL","X","IX","V","IV","I"];
  let res = "";
  
  for (let i = 0; i < 13; i++) {
    while (num >= int[i]) {
      res = res.concat(roman[i]);
      num -= int[i];
    }
  }
  
  return res;
};