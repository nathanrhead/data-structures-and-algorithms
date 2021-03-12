'use strict';

const HashMap = require('../hashtables/hashtable');
const leftJoin = require('./left-join');

describe('returns a joined matrix', () => {
  it ('accepts two hashmaps as arguments', () => {
    let hashtable1 = new HashMap(16);
    let hashtable2 = new HashMap(16);
    hashtable1.add('fond', 'enamour');
    hashtable1.add('wrath', 'anger');
    hashtable1.add('diligent', 'employed');
    hashtable1.add('outfit', 'garb');
    hashtable1.add('guide', 'usher');

    hashtable2.add('fond', 'averse');
    hashtable2.add('wrath', 'delight');
    hashtable2.add('diligent', 'idle');
    hashtable2.add('guide', 'follow');
    hashtable2.add('flow', 'jam');

    let results = leftJoin(hashtable1, hashtable2);

    expect(results).toEqual([['diligent', 'employed', 'idle'],['fond', 'enamour', 'averse'], ['guide', 'usher', 'follow'], ['wrath', 'anger', 'delight'], ['outfit', 'garb', null] ]);
  });

  it ('returns null if either the first or right hashmaps is empty', () => {
    let hashtable1 = new HashMap(16);
    let hashtable2 = new HashMap(16);

    let result = leftJoin(hashtable1, hashtable2);
    console.log('Result:', result);
    expect(result).toBe(null);
  });

  it ('returns an array in which the second index is null in each sub-array when no keys match between the two tables', () => {
    let hashtable1 = new HashMap(16);
    let hashtable2 = new HashMap(16);
    hashtable1.add('fond', 'spice');
    hashtable1.add('wrath', 'anger');
    hashtable1.add('diligent', 'employed');
    hashtable1.add('outfit', 'garb');
    hashtable1.add('guide', 'usher');

    hashtable2.add('sugar', 'averse');
    hashtable2.add('salt', 'delight');
    hashtable2.add('pepper', 'idle');
    hashtable2.add('florence', 'follow');
    hashtable2.add('waterfall', 'jam');

    let results = leftJoin(hashtable1, hashtable2);

    expect(results).toEqual([
      [ 'diligent', 'employed', null ],
      [ 'fond', 'spice', null ],
      [ 'guide', 'usher', null ],
      [ 'wrath', 'anger', null ],
      [ 'outfit', 'garb', null ]]
    );
  });
});
