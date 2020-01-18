const URLify = require("./URLify");

describe("#URLify", function () {

  it("is a function", function () {
    expect(typeof URLify).toEqual("function");
  });

  it("should replace all spaces within the provided length with '%20'", function () {
    expect(URLify("Mr John Smith    ", 13)).toEqual("Mr%20John%20Smith");

    expect(URLify("    ", 4)).toEqual("%20%20%20%20");
  });

});