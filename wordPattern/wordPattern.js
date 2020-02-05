// Leetcode 290: Word Pattern

var wordPattern = function(pattern, str) {
  let arr = str.split(" ");

  if (pattern.length !== arr.length) {
    return false;
  }

  let patternArr = {};

  for (let i=0; i<pattern.length; i++) {
    if (!Object.values(patternArr).includes(arr[i]) && patternArr[pattern[i]] === undefined) {
      patternArr[pattern[i]] = arr[i];
    } 
    if (patternArr[pattern[i]] !== arr[i]) {
      return false;
    }
  }

  return true
}

module.exports = wordPattern;