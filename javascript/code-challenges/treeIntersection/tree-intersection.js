const HashMap = require('../hashtables/hashtable');

function treeIntersection(bTree1, bTree2) {

  let results = [];
  const hashtable = new HashMap(1024);
  const _walk1 = (root) => {
    if(!hashtable.contains(root.value.toString())) {
      hashtable.add(root.value.toString(), root.value);
    } 
      if (root.left) _walk1(root.left);
      if (root.right) _walk1(root.right);
    };
  _walk1(bTree1.root);
  console.log('Hashtable:', hashtable.map[762]);
  const _walk2 = (root) => {
    console.log('Line 22:', hashtable.contains(root.value.toString()))
    if(hashtable.contains(root.value.toString())) {
      results.push(root.value);
      console.log('Results:', results);
    };
    if(root.left) _walk2(root.left);
    if(root.right) _walk2(root.right);

  };
  _walk2(bTree2.root);

  return results;
}

module.exports = treeIntersection;