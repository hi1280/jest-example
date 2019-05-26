const { assert } = chai;

suite("isEven suite", () => {
  test("is even", () => {
    assert.equal(NumberUtils.isEven(10), true);
  });
  test("is not even", () => {
    assert.equal(NumberUtils.isEven(7), false);
  });
});
