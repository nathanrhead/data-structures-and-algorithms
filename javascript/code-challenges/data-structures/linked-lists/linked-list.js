'use strict';

const Node = require('./node');
const Hashtable = require('../hashtables/hashtable');

class LinkedList {
  constructor() {
    this.head = null;
    this.length = 1;
  }

  // Insert a node at the head: time = O(1)
  prepend(value) {
    const node = new Node(value);
    if (!this.head) {
      this.head = node;
      this.tail = this.head;
    } else {
      node.next = this.head;
      this.head = node;
      this.length++;
    }
    return this;
  }

  // Append a node at the end of a list: time = O(1), thanks to the tail.
  append(value) {
    const node = new Node(value);
    if (!this.head) {
      this.head = node;
      this.tail = this.head;
    } else {
      this.tail.next = node;
      this.tail = node;
      this.length++;
    }
    return this;
    /* to traverse the LL is to increase the time complexity from O(1) to O(n) */
    // let current = this.head;
    // while (current.next) {
    //   current = current.next;
    // }
    // current.next = node;
  }

  // Look for the presence of a given value in the list: time = O(n).
  includes(value) {
    let current = this.head;
    while (current) {
      if (current.value === value) {
        return true;
      }
      current = current.next;
    }
    return false;
  }

  // Create a string of all the linked list's values from a to the nth.
  toString() {
    // Error check for an empty LL.
    if (!this.head) {
      return null;
    }

    let currentNode = this.head;
    let allValues = `{ ${this.head.value} } -> `;

    while (currentNode.next) {
      currentNode = currentNode.next;
      allValues += `{ ${currentNode.value} } -> `;
    }
    allValues += 'NULL';
    return allValues;
  }

  insertBefore(value, newValue) {
    let currentNode = this.head;
    let previousNode = null;
    while (currentNode) {
      if (currentNode.value === value) {
        const node = new Node(newValue);
        if (!previousNode) { this.head = node; }
        else { previousNode.next = node; }
        node.next = currentNode;
        return node;
      }
      previousNode = currentNode;
      currentNode = currentNode.next;
    }
    throw new Error('No match.'); // If there is no match.
  }

  insertAfter(value, newValue) {
    let current = this.head;
    while (current) {
      if (current.value === value) {
        const node = new Node(newValue);
        node.next = current.next;
        current.next = node;
        return node;
      }
      current = current.next;
    }
    throw new Error('No match.'); // If there is no match.
  }

  // Find the node k places from the end. This approach uses two pointers.
  kthFromTheEnd(k) {
    if (k < 0) { throw 'The linked list is empty.'; }

    let current = this.head;
    let kthFromCurrent = this.head;

    while (k > 0) {
      current = current.next;
      k--;
    }
    while (current.next) {
      current = current.next;
      kthFromCurrent = kthFromCurrent.next;
    }
    return kthFromCurrent.value;
  }

  removeDuplicates() {
    if (!this.head) throw 'This value doesn\'t exist in the list.';
    if (!this.head.next) return this.head;

    let hashmap = new Hashtable(5);
    // Iterate through the linked list to populate the hashtable.
    let current = this.head;
    let previous = null;
    while (current) {
      if (hashmap.contains(current.value)) {
        previous.next = current.next;
        current = current.next;
      } else {
        hashmap.add(current.value, current.value);
        previous = current;
        current = current.next;
      }
    }
    return this.toString();
  }

  reverse() {
    if (!this.head) return 'The list is empty.';
    if (!this.head.next) return this;
    let first = this.head;
    this.tail = this.head;
    let second = first.next;

    while (second) {
      const third = second.next; // This varialbe keeps track of the remaining list.
      second.next = first; // This point the second node's next from the third to the first.
      first = second; // This makes the second node the first node in preparation for the next loop.
      second = third; // This makes the second node the third node in preparation for the next loop.

    }
    this.head.next = null; // This makes the tail's next (or the former head's next) null, before reassigning the head to the first node.
    this.head = first; // This reassigns the head to the first (formerly last) node.
    return this.printList();
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

  zipLists(list) {
    // Error checking
    if (!list) return this;
    if (!this) return list;
    if (!this && !list) return 'Both lists are empty.';

    let listOneCurrent = this.head;
    let listTwoCurrent = list.head;

    while (listOneCurrent.next) {
      if (listTwoCurrent) {

        list.head = listTwoCurrent.next; // Move listTwo's head to next as a marker to keep track of the remainder of listTwo.
        listTwoCurrent.next = listOneCurrent.next; // Point to listOne's current's next.
        listOneCurrent.next = listTwoCurrent; // Point listOne's current's next to the node from listTwo to be inserted.

        // Traverse
        listOneCurrent = listTwoCurrent.next; // Remember, it's pointing at the rest of listOne.
        listTwoCurrent = list.head;
      } else break;
    }
    if (listTwoCurrent) listOneCurrent.next = listTwoCurrent;
    return this.printList();
  }
}

module.exports = LinkedList;
