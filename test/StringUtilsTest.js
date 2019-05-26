const { assert } = chai;

suite("echo suite", () => {
  test("spec", () => {
    assert.equal(StringUtils.echo("abc"), "abc");
  });
  test("es2015 spec", () => {
    assert.equal(StringUtils_es2015.echo("abc"), "abc");
  });
});

suite("toSnakeCase suite", () => {
  test("aaa is aaa", () => {
    assert.equal(StringUtils_es2015.toSnakeCase("abc"), "abc");
  });
  test("HelloWorld is hello_world", () => {
    assert.equal(StringUtils_es2015.toSnakeCase("HelloWorld"), "hello_world");
  });
  test("practiceJunit is practice_junit", () => {
    assert.equal(
      StringUtils_es2015.toSnakeCase("practiceJunit"),
      "practice_junit"
    );
  });
});
