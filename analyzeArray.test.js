import analyze from "./analyzeArray";

test("is it working", () => {
  expect(analyze([1, 2, 3, 4, 5, 6, 7, 12])).toEqual({
    avg: 5,
    m: 1,
    ma: 12,
    l: 8,
  });
});
