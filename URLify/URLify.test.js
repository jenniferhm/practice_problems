const URLify = require("./URLify");

describe("#URLify", function () {

  it("is a function", function () {
    expect(typeof URLify).toEqual("function");
  });

  it("should traverse matrix in a spiral pattern clockwise", function () {
    expect(URLify("Mr John Smith    ", 13)).toEqual("Mr%20John%20Smith");

    expect(URLify("    ", 4)).toEqual("%20%20%20%20");
  });

});