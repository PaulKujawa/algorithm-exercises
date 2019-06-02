const createSingleLinkedList = require("../../data-structures/single-linked-list");

let list;

beforeEach(() => {
  list = createSingleLinkedList();
});

describe("push item", () => {
  it("should be emptry per default", () => {
    expect(list.length).toBe(0);
  });

  it("should increase length with items added", () => {
    list.push("a");
    list.push("b");
    list.push("c");

    expect(list.length).toBe(3);
  });

  it("should insert in order", () => {
    list.push("a");
    list.push("b");
    list.push("c");

    expect(list.head.id).toBe("a");
    expect(list.head.next.id).toBe("b");
    expect(list.head.next.next.id).toBe("c");
  });
});

describe("pop an item", () => {
  it("should return undefined when empty", () => {
    expect(list.pop()).toBeUndefined();
  });

  it("should push and pop in order", () => {
    const nodeC = { id: "c", next: null };
    const nodeB = { id: "b", next: nodeC };
    list.head = { id: "a", next: nodeB };
    list.length = 3;

    expect(list.pop()).toBe("c");
  });
});

describe("insert item per index", () => {
  it("should return undefined for negative index", () => {
    expect(list.insert("a", -1)).toBeUndefined();
  });

  it("should return undefined for an invalid index", () => {
    expect(list.insert("a", 404)).toBeUndefined();
  });

  it("should create a list of 1 item", () => {
    list.insert("a", 0);
    expect(list.length).toBe(1);
    expect(list.head).toEqual({ id: "a", next: null });
  });

  it("should link items", () => {
    list.insert("a", 0);
    list.insert("b", 1);
    list.insert("c", 0);

    const nodeB = { id: "b", next: null };
    const nodeA = { id: "a", next: nodeB };
    const nodeC = { id: "c", next: nodeA };

    expect(list.head).toEqual(nodeC);
    expect(list.head.next).toEqual(nodeA);
    expect(list.head.next.next).toEqual(nodeB);
  });
});

describe("pick item per index", () => {
  it("should return undefined for negative index", () => {
    expect(list.pick(-1)).toBeUndefined();
  });

  it("should return undefined for an invalid index", () => {
    expect(list.pick(404)).toBeUndefined();
  });

  it("should handle list of 1 item", () => {
    list.head = { id: "a", next: null };
    list.length = 1;

    expect(list.pick(0)).toBe("a");
  });

  it("should handle list of 2 items", () => {
    const nodeB = { id: "b", next: null };
    list.head = { id: "a", next: nodeB };
    list.length = 2;

    expect(list.pick(1)).toBe("b");
  });

  it("should handle list of N-items", () => {
    const nodeC = { id: "c", next: null };
    const nodeB = { id: "b", next: nodeC };
    list.head = { id: "a", next: nodeB };
    list.length = 3;

    expect(list.pick(2)).toBe("c");
  });

  it("should handle two picks", () => {
    const nodeC = { id: "c", next: null };
    const nodeB = { id: "b", next: nodeC };
    list.head = { id: "a", next: nodeB };
    list.length = 3;

    expect(list.pick(0)).toBe("a");
    expect(list.pick(1)).toBe("c");
    expect(list.pick(0)).toBe("b");
  });
});
