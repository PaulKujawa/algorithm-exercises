function createNode(value) {
  return {
    value,
    next: undefined
  };
}

function createSingleLinkedList() {
  return {
    head: undefined,
    tail: undefined,
    length: 0,
    push(value) {
      const attachment = createNode(value);

      if (this.isEmpty()) {
        this.head = attachment;
        this.tail = attachment;
        this.length++;

        return attachment.value;
      }

      this.tail.next = attachment;
      this.tail = attachment;
      this.length++;

      return attachment.value;
    },
    pop() {
      if (this.length === 0) {
        return;
      }

      const node = this.tail;

      if (this.length === 1) {
        this.head = undefined;
        this.tail = undefined;
        this.length--;

        return node.value;
      }

      let current = this.head;
      while (current.next !== this.tail) {
        current = current.next;
      }

      current.next = undefined;
      this.tail = current;
      this.length--;

      return node.value;
    },
    isEmpty() {
      return this.length === 0;
    },
    get(index) {
        if (index < 0 || index >= this.length) {
            return;
        }
        
        let node = this.head;
        for (let i = 0; i < index; i++) {
            node = node.next;
        }
        
        return node.value;
    },
    delete(index) {
        if (index < 0 || index >= this.length) {
            return;
        }

        let current = this.head;
        for (let i = 0; i < index - 1; i++) {
            current = current.next;
        }

        const node = current.next;
        current.next = current.next.next;
        this.length--;

        return node.value;
    }
  };
}

module.exports = createSingleLinkedList;
