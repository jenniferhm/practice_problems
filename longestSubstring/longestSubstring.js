// Leetcode 3: Longest Substring Without Repeating Characters

var longestSubstring = function (s) {
  let uniqueSubStr = [];
  let maxLength = 0;
  let startIdx = 0;
  let idx = 0;

  while (idx < s.length) {
    if (!uniqueSubStr.includes(s[idx])) {
      uniqueSubStr.push(s[idx]);
      idx++;
    } else {
      startIdx++;
      uniqueSubStr = [s[startIdx]];
      idx = startIdx + 1;
    }
    if (uniqueSubStr.length > maxLength) {
      maxLength = uniqueSubStr.length;
    }
  }

  return maxLength;
}

module.exports = longestSubstring;