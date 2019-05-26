const { assert } = chai;

suite("FizzBuzz suite", () => {
  test("FizzBuzz test", () => {
    const actual = FizzBuzz.createFizzBuzzList(16);
    assert.equal(actual.length, 16);
    assert.equal(actual[0], "1");
    assert.equal(actual[1], "2");
    assert.equal(actual[2], "Fizz");
    assert.equal(actual[3], "4");
    assert.equal(actual[4], "Buzz");
    assert.equal(actual[5], "Fizz");
    assert.equal(actual[6], "7");
    assert.equal(actual[7], "8");
    assert.equal(actual[8], "Fizz");
    assert.equal(actual[9], "Buzz");
    assert.equal(actual[10], "11");
    assert.equal(actual[11], "Fizz");
    assert.equal(actual[12], "13");
    assert.equal(actual[13], "14");
    assert.equal(actual[14], "FizzBuzz");
    assert.equal(actual[15], "16");
  });
  test("FizzBuzz test custom", () => {
    const expected = [
      "1",
      "2",
      "Fizz",
      "4",
      "Buzz",
      "Fizz",
      "7",
      "8",
      "Fizz",
      "Buzz",
      "11",
      "Fizz",
      "13",
      "14",
      "FizzBuzz",
      "16"
    ];
    const actual = FizzBuzz.createFizzBuzzList(16);
    assert.equal(actual.length, 16);
    assert.deepEqual(actual, expected);
  });
});
