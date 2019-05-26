const { assert } = chai;

suite("LogAnalyzer suite", () => {
  test("load method throw exception", () => {
    const logLoader = new LogLoader();
    sinon.stub(logLoader, "load").throws("load exception");
    const sut = new LogAnalyzer(logLoader);
    assert.throws(
      () => {
        sut.analyze("test");
      },
      Error,
      "load exception"
    );
  });
});
