const createSingleLinkedList = require("../list-single-linked.js");

let list;

beforeEach(() => {
  list = createSingleLinkedList();
});

describe("attach item to tail", () => {
  it("should be emptry per default", () => {
    expect(list.isEmpty()).toBeTruthy();
    expect(list.length).toBe(0);
  });

  it("should increase length with items added", () => {
    list.push("a");
    list.push("b");
    list.push("c");

    expect(list.length).toBe(3);
    expect(list.isEmpty()).toBeFalsy();
  });

  it("should update tail to last-in item", () => {
    list.push("a");
    list.push("b");
    list.push("c");

    expect(list.length).toBe(3);
    expect(list.get(2)).toBe("c");
  });
});

describe("remove item from tail", () => {
  it("should return undefined when empty", () => {
    expect(list.pop()).toBeUndefined();
  });

  it("should return and remove last-in item", () => {
    list.push("a");
    list.push("b");
    list.push("c");
    expect(list.pop()).toBe("c");
    expect(list.length).toBe(2);
  });
});

describe("getting items per index", () => {
  it("should return undefined for an invalid index", () => {
    expect(list.get(404)).toBeUndefined();
  });

  it("should return the item for a valid index", () => {
    list.push("a");
    list.push("b");
    expect(list.get(0)).toBe("a");
    expect(list.get(1)).toBe("b");
    expect(list.length).toBe(2);
  });
});

describe("remove item per index", () => {
  it("should return undefined for an invalid index", () => {
    expect(list.delete(404)).toBeUndefined();
  });

  it("should return and remove the item for a valid index", () => {
    list.push("a");
    list.push("b");
    list.push("c");
    list.push("d");
    expect(list.delete(1)).toBe("b");
    expect(list.get(1)).toBe("c");
    expect(list.length).toBe(3);
  });
});
