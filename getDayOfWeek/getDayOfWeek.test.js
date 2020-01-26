const getDayOfWeek = require("./getDayOfWeek");

describe("#getDayOfWeek", function() {
  it("it is a function", function() {
    expect(typeof getDayOfWeek).toEqual("function");
  });

  it("should return the day of the week", function() {
    expect(getDayOfWeek(25, 1, 2020)).toEqual("Saturday");

     expect(getDayOfWeek(6, 11, 1996)).toEqual("Wednesday");
  });
});