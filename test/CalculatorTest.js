const { assert } = chai;

suite("divide suite", () => {
  test("0 is exception", () => {
    assert.throws(() => {
      Calculator.divide(1, 0);
    }, "y is zero");
  });
});
