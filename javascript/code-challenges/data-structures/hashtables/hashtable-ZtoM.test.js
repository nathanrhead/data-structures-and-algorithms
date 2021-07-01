'use strict';

const Hashmap = require('./hashtable-ZtoM');

describe ('the hashtable class that uses arrays instead of key-value pairs to build a hashmap', () => {

  const hashmap = new Hashmap(10);

  it ('hashes values and puts new entries into the table at the hash point', () => {
    hashmap.set('grapes', 10);
    hashmap.set('apples', 9);
    hashmap.set('bananas', 6);
    expect(hashmap.get('grapes')).toEqual(10);
    expect(hashmap.get('apples')).toEqual(9);
    expect(hashmap.get('bananas')).toEqual(6);
    expect(hashmap.data[3][0]).toEqual(['grapes', 10]);
    expect(hashmap.data[3][1]).toEqual(['bananas', 6]);
    expect(hashmap.data[9][0]).toEqual(['apples', 9]);
  });

  it ('retrieves the value when given the key', () => {
    expect(hashmap.get('apples')).toEqual(9);
  });

  it ('returns all of the hashmap\'s keys', () => {
    const hashmap1 = new Hashmap(50);
    hashmap1.set('grapes', 10);
    hashmap1.set('apples', 9);
    hashmap1.set('oranges', 6);
    expect(hashmap1.keys()).toEqual(['grapes', 'apples', 'oranges']);
  });

  it ('returns all of the hashmap\'s keys, taking collisions into account', () => {
    const hashmap1 = new Hashmap(10);
    hashmap1.set('grapes', 10);
    hashmap1.set('apples', 9);
    hashmap1.set('bananas', 6);
    expect(hashmap1.keys()).toEqual(['grapes', 'bananas', 'apples']);
  });

});
