'use strict';

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  };
};

class LinkedList {
  constructor() {
    this.head = null;
  };

// Insert a node at the head.
insert(entry) { 
  if(this.head === null) { 
    const node = new Node(entry);
    this.head = node;
  } else {
    const node = new Node(entry);
    node.next = this.head;
    this.head = node;
    };
  };
};

// This constructs the hashtable
class HashMap {
  constructor(size) {
    this.map = new Array(size);
    this.size = size;
  };

  //This hashes the key.
  hash(key) {
    return key.split('').reduce((acc, val, idx) => {
      return acc + val.charCodeAt(0);
    }, 0) * 599 % this.size;
  };

  // This adds the node to the hashtable.
  add(key, value) {
    // 1. Hash the key.
    const hash = this.hash(key);

    //2 Create the entry key-value pair.
    const entry = { [key]: value };

    if (!this.map[hash]) this.map[hash] = new LinkedList(); 

    this.map[hash].insert(entry);
  };

  // It takes in a key and returns the value from the table.
  get(key) {
    if(this.size === 0) return null;
    const hash = this.hash(key);
    
    if (!this.map[hash]) return null;

    if (key === Object.keys(this.map[hash].head.value)) { return this.map[hash].head.value[key]; 
    } else { 
      let current = this.map[hash].head;
      while(current.next !== null) {
        current = current.next;
        if (key == Object.keys(current.value)) {
          // console.log('key:', key);
          let value = current.value[key] 
                return value; 
        }
      }
    }
  }

  // Takes in the key and returns a boolean, indicating whether the key exists in the table already.
  contains(key) {
    const hash = this.hash(key);

    if(!this.map[hash]) return false;

    // This part's not working right; it's supposed to look for keys beyond the head, but it's returning undefined, instead of false.
    if(key == Object.keys(this.map[hash].head.value)) { return true }
    else {
    let current = this.map[hash].head;
      while(current.next !== null) {
        current = current.next;
        console.log('Key:', [key]);
        console.log(Object.keys(current.value));
        Object.keys(current.value) == [key] ? true : false;
      }
    }
  }
}

module.exports = HashMap;