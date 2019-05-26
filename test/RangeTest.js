const { assert } = chai;

suite("Range suite dynamically", () => {
  let sut = null;
  setup(() => {
    sut = new Range(0.0, 10.5);
  });

  const tests = [
    { args: -0.1, expected: false },
    { args: 0.0, expected: true },
    { args: 10.5, expected: true },
    { args: 10.6, expected: false }
  ];

  tests.forEach(tst => {
    test(`${tst.args} is ${tst.expected}`, () => {
      assert.equal(sut.contains(tst.args), tst.expected);
    });
  });
});
