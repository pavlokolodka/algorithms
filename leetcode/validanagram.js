// Title: Valid Anagram
// Problem: https://leetcode.com/problems/valid-anagram/
// Complexity: Time: O(n)
//             Space: O(n)
// Hint: Split the string and count the number of elements or compare element by element
   

/**
 * Returns true if t is an anagram of s, and false otherwise.
 * @param {number} a
 * @param {number} b
 * @returns {number}
 */
const isAnagram = function (s, t) {
	if (s.length != t.length) return false;
	const hashTable = {};
   
	for (let i = 0; i < s.length; i++) {
		if (!hashTable[s[i]]) {
			hashTable[s[i]] = 0;
		}
		hashTable[s[i]]++;
	}
    
	for (let j = 0; j < t.length; j++) {
    if (!hashTable[t[j]]) {
			return false;
		}
        
		hashTable[t[j]]--;
  }

	return true;
};


// Approach 2: Using 2 arrays
// Complexity: Time: O(n)
//             Space: O(n)
const isAnagram = function(string1, string2) {
  if (string1.length !== string2.length) return false;

  let letters1 = string1.split('');
  let letters2 = string2.split('');

  for (let letter of letters1) {
      let position = letters2.indexOf(letter);

      if (position == -1) return false;

      letters2.splice(position, 1);
  }

  return true;
};

// Approach 2: Comparing two sorted arrays
// Complexity: Time: O(n)
//             Space: O(n)
const isAnagram = function(s, t) {
  if (s.length !== t.length ) {
    return false;
  }

  if (s.split('').sort().join('') === t.split('').sort().join('')) {
    return true;
  } else {
    return false;
  }
};