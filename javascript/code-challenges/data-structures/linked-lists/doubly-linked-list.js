'use strict';

// A doubly linked list with methods.

class Node {
  constructor(value) {
    this.value = value;
    this.previous = null;
    this.next = null;
  }
}

class DoublyLinkedList {
  constructor(value) {
    this.head = value;
    this.tail = this.head; // For some reason, when this.head gets assigned, this.tail remains equal to null.
    this.length = 1;
  }

  append(value) {
    const node = new Node(value);

    if (!this.head) {
      this.head = node;
      this.tail = this.head;
    } else {
      node.previous = this.tail;
      this.tail.next = node;
      this.tail = node;
      this.length++;
      return this;
    }
  }

  prepend(value) {
    const node = new Node(value);
    if (!this.head) {
      this.head = node;
      this.tail = this.head;
    } else {
      node.next = this.head;
      this.head.previous = node;
      this.head = node;
      this.length++;
    }
    return this;
  }

  printList() {
    const array = [];
    let current = this.head;
    while (current) {
      array.push(current.value);
      current = current.next;
    }
    return array;
  }

  insert(index, value) {
    if (index >= this.length) {
      this.append(value);
      return this.printList();
    } else if (index === 0) {
      this.prepend(value);
      return this.printList();
    }

    const node = new Node(value);
    const left = this.traverseToIndex(index - 1);
    const right = left.next;

    right.previous = node;
    node.next = left.next;
    left.next = node;
    node.previous = left;
    this.length++;
    return this.printList();
  }

  remove(index) {
    if (index === 0) {
      this.head = this.head.next;
      this.head.previous = null;
      this.length--;
      return this.printList();
    }

    if (index > this.length || index < 0) return 'No such index exists.';

    const left = this.traverseToIndex(index - 1);
    const unwanted = left.next;
    const right = unwanted.next;

    left.next = unwanted.next;
    right.previous = left;
    this.length--;
    return this.printList();
  }

  traverseToIndex(index) {
    if (index < -1 || index > this.length) return 'No such index exists.'

    let counter = 0;
    let current = this.head;
    while (counter !== index) {
      current = current.next;
      counter++;
    }
    return current; // This gives the value of the node previous to the insertion point.
  }
}

module.exports = DoublyLinkedList;
