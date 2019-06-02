function createNode(id) {
  return {
    id,
    next: null
  };
}

function createSingleLinkedList() {
  return {
    head: null,
    length: 0,
    push(id) {
      this.insert(id, this.length);
    },
    pop() {
      return this.pick(this.length - 1);
    },
    insert(id, idx) {
      if (idx < 0 || idx > this.length) {
        return;
      }

      const node = createNode(id);
      this.length++;

      if (idx === 0) {
        node.next = this.head;
        this.head = node;
        return;
      }

      let current = this.head;

      for (let i = 0; i < idx - 1; i++) {
        current = current.next;
      }

      node.next = current.next;
      current.next = node;
    },
    pick(idx) {
      if (idx < 0 || idx >= this.length) {
        return;
      }

      if (idx === 0) {
        const { id } = this.head;
        this.head = this.head.next;
        this.length--;

        return id;
      }

      let current = this.head;

      for (let i = 0; i < idx - 1; i++) {
        current = current.next;
      }

      const { id } = current.next;
      current.next = current.next.next;

      return id;
    }
  };
}

module.exports = createSingleLinkedList;
