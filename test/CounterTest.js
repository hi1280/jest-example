const { assert } = chai;

suite("increment suite", () => {
  test("get 1 at initial", () => {
    c = new Counter();
    assert.equal(c.increment(), 1);
  });
  test("get 2 at run increment method", () => {
    c = new Counter();
    c.increment();
    assert.equal(c.increment(), 2);
  });
  test("get 51 at run increment method 50 times", () => {
    c = new Counter();
    for (let i = 0; i < 50; i++) {
      c.increment();
    }
    assert.equal(c.increment(), 51);
  });
});
