const hungryRabbit = require("./hungryRabbit");

describe("#hungryRabbit", function() {
  it("it is a function", function() {
    expect(typeof hungryRabbit).toEqual("function");
  });

  it("should find max number of carrots a rabbit can eat", function() {
    expect(hungryRabbit([
      [5, 7, 8, 6, 3],
      [0, 0, 7, 0, 4],
      [4, 6, 3, 4, 9],
      [3, 1, 0, 5, 8]
    ])).toEqual(27);

     expect(hungryRabbit([
      [1, 2, 3, 4],
      [0, 6, 7, 8],
      [8, 8, 0, 0],
      [5, 5, 1, 2]
     ])).toEqual(29);

     expect(hungryRabbit([
      [0, 7, 8],
      [5, 9, 6],
      [2, 0, 1]
     ])).toEqual(31);

     expect(hungryRabbit([
      [1, 6, 3, 4],
      [0, 5, 2, 8],
      [9, 9, 0, 0]
     ])).toEqual(23);
  });
});