'use strict';

function repeatedWord(lengthyString) {
  if (typeof(lengthyString) != 'string') return null;

  const regex = /\b\w*/g;
  const data = lengthyString.match(regex);

  // console.log('Data:', data);

  let hashtable = new HashMap(1);

  for (let i=0; i<=data.length-1; i++) {
    var word = data[i];
    hashtable.add(word, word);
    // console.log('Hashtabel.map[i]:', hashtable.map[5])

    // if(hashtable.map[i] != undefined) {
    //   let current = hashtable.map[i].head;
    //   // console.log('Current:', current.value);
    //   while (current) {
    //     if (current.value === word) {
    //       return current.value;}
    //       current = current.next;
    //     }
    //       return null;
    // }
  }
    console.log('Hashtable:', hashtable.map[0].head.next);


  // for (let j=0; j<=hashtable.map.length; j++) {
  //   if (hashtable.map[j].head) {
  //     let current = hashtable.map[j].head;
  //     while (current) {
  //       if (current.value === word) {
  //         return current.value;}
  //         current = current.next;
  //       }
  //         return null;
  //   }
  // }
}




const string = 'Stupid is as stupid does.'
console.log('Result:', repeatedWord(string));
