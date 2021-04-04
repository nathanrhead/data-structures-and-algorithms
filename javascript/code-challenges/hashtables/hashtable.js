'use strict';

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  // Insert a node at the head.
  insert(val) {
    if (!this.head) {
      const node = new Node(val);
      this.head = node;
    } else {
      const node = new Node(val);
      node.next = this.head;
      this.head = node;
    }
  }
}

// This constructs the hashtable
class HashMap {
  constructor(size) {
    this.map = new Array(size);
    this.size = size;
  }

  //This hashes the key.
  hash(key) {
    if (typeof key === 'string') {
      return key.split('').reduce((acc, val) => {
        return acc + val.charCodeAt(0);
      }, 0) * 599 % this.size;
    } else if (typeof key === 'number') {
      return key * 599 & this.size;
    }
  }

  // This adds the node to the hashtable.
  add(key, value) {
    // 1. Hash the key.
    const hash = this.hash(key);

    // 2. Create the entry key-value pair.
    const entry = { [key]: value };
    // 3. Create a new linked list if nothing resides at this hash point.

    if (!this.map[hash]) this.map[hash] = new LinkedList();

    // 4. Insert the new object at the corresponding hash point.
    this.map[hash].insert(entry);
  }

  // // It takes in a key and returns the value from the table.
  get(key) {
    // 1. Hash the key.
    const hash = this.hash(key);

    // 2. Error check for an empty entry.
    if (!this.map[hash]) return null;

    // Save the key of the value of the head node.
    let nodeKey = Object.keys(this.map[hash].head.value);

    if (key === nodeKey[0]) { // If the head node's key, return that value;
      return this.map[hash].head.value[key];
    } else { // Otherwise, iterate through the linked list comparing keys.
      let current = this.map[hash].head.next;
      if (!current) return null;
      while (current) {
        let val = Object.keys(current.value);
        if (key === val[0]) return current.value[key];
        else current = current.next;
      }
      return null;
    }
  }

  // Code review's get().
  // get(key) {
  //   //// 1. Hash the key.
  //   const hash = this.hash(key);
  //   //// 2. Error handling: If there isn't a hash, return null
  //   if (!this.map[hash]) return null;
  //   //// 3. Make the hashed position, which is a linked list, equal to current, in order to be able to traverse the bucket.
  //   let current = this.map[hash].head;
  //   //// 4. While current exists, if the keys match, return the value at that key.
  //   while (current) {
  //     // eslint-disable-next-line no-prototype-builtins
  //     if (current.value.hasOwnProperty(key)) { return current.value[key]; }
  //     current = current.next;
  //   }
  //   // If the key is not found, return null.
  //   return null;
  // }

  // Takes in the key and returns a boolean, indicating whether the key exists in the table already.
  contains(key) {
    const hash = this.hash(key);
    if (!this.map[hash]) return false;

    const val = Object.keys(this.map[hash].head.value);

    if (key === parseInt(val[0]) || key === val[0]) {
      return true;
    } else {
      let current = this.map[hash].head;
      while (current.next) {
        let val = Object.keys(current.value);
        if (val[0] === key) return true;
        else current = current.next;
      }
    } return false;
  }
}

module.exports = HashMap;
