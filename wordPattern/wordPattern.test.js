const wordPattern = require("./wordPattern");

describe("#wordPattern", function() {
  it("it is a function", function() {
    expect(typeof wordPattern).toEqual("function");
  });

  it("should return a boolean indicating whether the pattern and str follow the same word pattern", function() {
    expect(wordPattern(pattern = "abba", str = "dog cat cat dog")).toEqual(true);
    
    expect(wordPattern(pattern = "abba", str = "dog cat cat fish")).toEqual(false);
    
    expect(wordPattern(pattern = "aaaa", str = "dog cat cat dog")).toEqual(false);

    expect(wordPattern(pattern = "abba", str = "dog dog dog dog")).toEqual(false);
  });
});