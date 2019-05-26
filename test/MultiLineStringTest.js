const { assert } = chai;

suite("MultiLineString suite", () => {
  test("MultiLineString test", () => {
    const expected = "Hello\nWorld\nHello\nWorld\nHello\nWorld\n";
    assert.deepEqual(
      MultiLineString.join(
        "Hello",
        "World",
        "Hello",
        "World",
        "Hello",
        "World"
      ),
      expected
    );
  });
});
