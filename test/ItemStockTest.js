const { assert } = chai;

suite("ItemStock suite at Initial", () => {
  let sut = null;
  let book = null;
  setup(() => {
    sut = new ItemStock();
    book = new Item("book", 3800);
  });
  test("getNum is 0 at initial", () => {
    assert.equal(sut.getNum(book), 0);
  });
  test("getNum is 0 at illegal args", () => {
    assert.equal(sut.getNum(), 0);
  });
});

suite("ItemStock suite after add Item", () => {
  let sut = null;
  let book = null;
  setup(() => {
    sut = new ItemStock();
    book = new Item("book", 3800);
    sut.add(book);
  });
  test("getNum is 1 after add Item", () => {
    assert.equal(sut.getNum(book), 1);
  });
  test("getNum is 2 after add same Item", () => {
    sut.add(book);
    assert.equal(sut.getNum(book), 2);
  });
  test("getNum is 1 after add different Item", () => {
    const bike = new Item("bike", 57000);
    sut.add(bike);
    assert.equal(sut.getNum(book), 1);
  });
});
