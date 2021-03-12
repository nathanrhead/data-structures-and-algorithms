// const HashMap = require('../hashMap/hashMap.js');

'Use strict';
function leftJoin(hashmap1, hashmap2) {
  if (hashmap1 === null || hashmap2 === null) return null;
  let results = [];
  for (let i = 0; i <= hashmap1.map.length - 1; i++) {
    if (hashmap1.map[i]) {
      let key = [Object.keys(hashmap1.map[i].head.value)[0]];
      let value = [Object.values(hashmap1.map[i].head.value)[0]]
      results.push([key[0], value[0]]);
      if (hashmap1.map[i].head.next !== null) {
        let current = hashmap1.map[i].head.next;
        while (current.next !== null) {
          results.push(Object.keys(current.value)[0], current.value);
          current = current.next;
        }
      }
    }
  }
  for (let j = 0; j <= results.length - 1; j++) {
    let match = hashmap2.get(results[j][0]);
    results[j].push(match);
  }
  return results.length === 0 ? null : results;
}
module.exports = leftJoin;
