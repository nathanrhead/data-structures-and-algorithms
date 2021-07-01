'use strict';

/* This is an implementation, written by Andrei of Udemy's Zero to Mastery, that uses arrays instead of objects for each discrete set of data. 

Instead of [ {key: value}, {key: value} ], it embeds an array, with the zero index being the key and the index of one being the value, e.g., [ [key, value] ]. 

Collisions are handled not with linked lists, but with another embedded array, as follows:

- data1 = {apples, 5};
- data2 = {bananas, 6};

map(2) = [ [ [apples, 5], [bananas, 6] ], [ <empty> ] ]

Also, note that there is no need for a Node class, since linked lists aren't being used.
*/

class HashTable {
  constructor(size){
    this.data = new Array(size);
  }

  _hash(key) {
    let hash = 0;
    for (let i =0; i < key.length; i++){
      hash = (hash + key.charCodeAt(i) * i) % this.data.length;
    }
    return hash;
  }

  set(key, value) {
    let address = this._hash(key);
    if (!this.data[address]) {
      this.data[address] = [];
    }
    this.data[address].push([key, value]);
    return this.data;
  }

  get(key){
    const address = this._hash(key);
    const currentBucket = this.data[address];
    if (currentBucket) {
      for(let i = 0; i < currentBucket.length; i++){
        if(currentBucket[i][0] === key) {
          return currentBucket[i][1];
        }
      }
    }
    return undefined;
  }

  keys() {
    const keysArray = [];
    for (let i = 0; i < this.data.length; i++) {
      if (this.data[i]) {
        if (this.data[i].length > 1){
          this.data[i].forEach(item => keysArray.push(item[0]));
        }
        else keysArray.push(this.data[i][0][0]);
      }
    }
    return keysArray;
  }
}

module.exports = HashTable;
