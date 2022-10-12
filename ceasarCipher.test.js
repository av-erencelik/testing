import ceaserCipher from "./ceasarCipher";

test("is it ciphering", () => {
  expect(ceaserCipher("abcdef")).toBe("bcdefg");
});
test("is it ciphering last letter", () => {
  expect(ceaserCipher("zzzzz")).toBe("aaaaa");
});
test("is space between words a problem", () => {
  expect(ceaserCipher("abc cde")).toBe("bcd def");
});
