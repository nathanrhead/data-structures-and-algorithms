'use strict';

const HashMap = require('./hashtable');

describe('Hashtables', () => {

  it ('takes in both the key and value and hashes the key and adds the key and value pair to the table', () => {
    let hashtable = new HashMap(6);
    hashtable.add('red', 'красный');
    hashtable.add('yellow', 'жёлтый');
    hashtable.add('orange', 'оранжевый');
    hashtable.add('blue', 'синий');
    expect(hashtable.map[3].head.value).toEqual( {red: 'красный'} );
    expect(hashtable.map[4].head.value).toEqual( {yellow: 'жёлтый'} );
    expect(hashtable.map[0].head.value).toEqual( {orange: 'оранжевый'} );
    expect(hashtable.map[2].head.value).toEqual( {blue: 'синий'} );

  });

  it ('handles collisions as needed', () => {
    let hashtable = new HashMap(2);
    hashtable.add('red', 'красный');
    hashtable.add('yellow', 'жёлтый');
    hashtable.add('orange', 'оранжевый');
    hashtable.add('blue', 'синий');
    expect(hashtable.map[0].head.next.value).toEqual( {orange: 'оранжевый'});
  });

  it ('hashes a key to an in-range value', () => {
    let hashtable1 = new HashMap(1);
    let hashtable2 = new HashMap(10);
    let hashtable3 = new HashMap(1024);
    hashtable1.add('red', 'красный');
    hashtable2.add('red', 'красный');
    hashtable3.add('red', 'красный');
    expect(hashtable1.map[0].head.value).toEqual({red: 'красный'} );
    expect(hashtable2.map[5].head.value).toEqual({red: 'красный'} );
    expect(hashtable3.map[269].head.value).toEqual({red: 'красный'} );
  });

  it ('retrieves a key-value pair based on the key and returns the value', () => {
    let hashtable = new HashMap(10);
    hashtable.add('red', 'красный');
    hashtable.add('yellow', 'жёлтый');
    hashtable.add('orange', 'оранжевый');
    hashtable.add('blue', 'синий');
    hashtable.get('yellow');
    expect(hashtable.map[2].head.value.yellow).toEqual('жёлтый');
  });

  it ('retrieves a value from a bucket within the hashtable that has a collision', () => {
    let hashtable = new HashMap(2);
    hashtable.add('red', 'красный');
    hashtable.add('yellow', 'жёлтый');
    hashtable.add('orange', 'оранжевый');
    hashtable.add('blue', 'синий');
    let result = hashtable.get('yellow');
    expect(result).toEqual('жёлтый');
  });

  it ('returns null when trying to get a value from a hashtable with no entries', () => {
    let hashtable = new HashMap(0);
    let result = hashtable.get('red');
    expect(result).toBe(null);
  });

  it ('returns null for a key that does not exist in the hashtable', () => {
    let hashtable = new HashMap(10);
    let result = hashtable.get('yellow');
    expect(result).toBe(null);
  });

  it ('returns true if a key already exists in the table and false if it does not', () => {
    let hashtable = new HashMap(2);
    hashtable.add('red', 'красный');
    hashtable.add('yellow', 'жёлтый');
    hashtable.add('orange', 'оранжевый');
    hashtable.add('blue', 'синий');
    const result = hashtable.contains('orange');
    const result1 = hashtable.contains('black');
    expect(result).toBe(true);
    expect(result1).toBe(false);
  });

  it ('returns false if the hashtable does not contain the key beyond the head', () => {
    let hashtable = new HashMap(102);
    hashtable.add('red', 'красный');
    hashtable.add('yellow', 'жёлтый');
    hashtable.add('orange', 'оранжевый');
    hashtable.add('purple', 'фиолетовый');
    hashtable.add('pink', 'розовый');
    hashtable.add('blue', 'синий');
    const result = hashtable.contains('foreign');
    const result1 = hashtable.contains('black');
    expect(result).toBe(false);
    expect(result1).toBe(false);
  });
});

// This is hashtable.map:
// Hashtable: [
//   LinkedList { head: Node { value: [Object], next: [Node] } },
//   LinkedList { head: Node { value: [Object], next: null } }
// ]

// This is hashtable.map[0]:
//   LinkedList { head: Node { value: [Object], next: [Node] } },

// this is hashtable.map[0].head:
// Hashtable: Node {
//   value: { blue: 'синий' },
//   next: Node {
//     value: { orange: 'оранжевый' },
//     next: Node { value: [Object], next: null }
//   }
// }

// This is hashtable.map[0].head.next:
// Hashtable: Node {
//   value: { orange: 'оранжевый' },
//   next: Node { value: { yellow: 'жёлтый' }, next: null }
// }
