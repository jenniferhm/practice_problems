const kClosestPoints = require("./kClosestPoints");

describe("#kClosestPoints", function() {
  it("it is a function", function() {
    expect(typeof kClosestPoints).toEqual("function");
  });

  it("should return the lowest number that isn't on the front of a flipped card", function() {
    expect(kClosestPoints([[1,3],[-2,2]], 1)).toEqual([[-2,2]]);
    
    expect(kClosestPoints([[3,3],[5,-1],[-2,4]], 2)).toEqual([[3,3],[-2,4]]);
  });
});