const longestSubstring = require("./longestSubstring");

describe("#longestSubstring", function() {
  it("it is a function", function() {
    expect(typeof longestSubstring).toEqual("function");
  });

  it("should return the length of the longest substring", function() {
    expect(longestSubstring("abcabcbb")).toEqual(3);

    expect(longestSubstring("pwwkew")).toEqual(3);

    expect(longestSubstring(" ")).toEqual(1);

    expect(longestSubstring("c")).toEqual(1);

    expect(longestSubstring("dvdf")).toEqual(3);

    expect(longestSubstring("au")).toEqual(2);
  });
});