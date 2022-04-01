const compute = require("./index");

describe("Basic test", () => {
  it("should return 1 when given 1", () => {
    // Arrange
    const input = "1";
    const output = "1";

    // Act
    const result = compute(input);

    // Assert
    expect(result).toEqual(output);
  });

  it("should return 2 when given 2", () => {
    // Arrange
    const input = "2";
    const output = "2";

    // Act
    const result = compute(input);

    // Assert
    expect(result).toEqual(output);
  });

  it("should return 'FooFoo' when given 3", () => {
    // Arrange
    const input = "3";
    const output = "FooFoo";

    // Act
    const result = compute(input);

    // Assert
    expect(result).toEqual(output);
  });

  it("should return 'BarBar' when given 5", () => {
    // Arrange
    const input = "5";
    const output = "BarBar";

    // Act
    const result = compute(input);

    // Assert
    expect(result).toEqual(output);
  });

  it("should return 'QixQix' when given 7", () => {
    // Arrange
    const input = "7";
    const output = "QixQix";

    // Act
    const result = compute(input);

    // Assert
    expect(result).toEqual(output);
  });

  it("should return 'Foo' when given 'toto3titi' ", () => {
    // Arrange
    const input = "toto3titi";
    const output = "Foo";

    // Act
    const result = compute(input);

    // Assert
    expect(result).toEqual(output);
  });

  it("should return empty string when given an empty string", () => {
    // Arrange
    const input = "";
    const output = "";

    // Act
    const result = compute(input);

    // Assert
    expect(result).toEqual(output);
  });
});
