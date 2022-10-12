const { reverseString, capitalize } = require("./main");

test("is it Capitalized", () => {
  expect(capitalize("hello")).toEqual("Hello");
});
test("is it Reversed", () => {
  expect(reverseString("hello")).toEqual("olleh");
});
