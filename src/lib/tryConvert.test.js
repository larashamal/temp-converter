import tryConvert from "./tryConvert";

it("converts 100° C to 212° F", () => {
  // Arrange - set up your inputs and expected output
  const temp2Convert = 100;
  const conversion = "toFahrenheit";
  const expected = "212"; // the correct answer

  // Act
  const result = tryConvert(temp2Convert, conversion);

  // Assert
  expect(result).toBe(expected);
});

it("converts 50°F to 10°C", () => {
  expect(tryConvert(50, "toCelsius")).toBe("10");
});

it("returns a blank string when given non-numeric input", () => {
  // Arrange
  const temp2Convert = "abc";
  const conversion = "toCelsius";

  // Act
  const result = tryConvert(temp2Convert, conversion);

  // Assert
  expect(result).toBe("");
});
