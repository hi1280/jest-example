const Counter = require("../src/Counter");

describe("increment", () => {
  test("get 1 at initial", () => {
    const c = new Counter();
    // assert.equal(c.increment(), 1);
    expect(c.increment()).toBe(1);
  });
  test("get 2 at run increment method", () => {
    const c = new Counter();
    c.increment();
    // assert.equal(c.increment(), 2);
    expect(c.increment()).toBe(2);
  });
  test("get 51 at run increment method 50 times", () => {
    const c = new Counter();
    for (let i = 0; i < 50; i++) {
      c.increment();
    }
    // assert.equal(c.increment(), 51);
    expect(c.increment()).toBe(51);
  });
});
