const { assert } = chai;

suite("NetworkResources suite", () => {
  test("load test", () => {
    const expected = "Hello World";
    const loader = new NetworkLoader();
    sinon.stub(loader, "getInput").returns({
      read() {
        return expected;
      }
    });
    const sut = new NetworkResources(loader);
    assert.equal(sut.load(), expected);
  });
});
