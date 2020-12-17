'use strict';

const LinkedList = require('../index');

function zipLists(linkedListOne, linkedListTwo) {
  let listOneCurrent = linkedListOne.head; // Step 1a
  let listTwoCurrent = linkedListTwo.head; // Step 1b

  while(listOneCurrent.next || listTwoCurrent.next) { 
    linkedListTwo.head = listTwoCurrent.next; // Step 2a
    listTwoCurrent.next = listOneCurrent.next; // Step 2b
    listOneCurrent.next = listTwoCurrent; // Step 3
    listOneCurrent = listTwoCurrent.next; // Step 4a
    listTwoCurrent = linkedListTwo.head; // Step 4b
    
  }
  if (listOneCurrent.next === null) {
    listOneCurrent.next = listTwoCurrent;
  } else if (listTwoCurrent.next === null) {
    listTwoCurrent.next = ListOneCurrent;
  }

  console.log(listOneCurrent.head.value);
  return listOneCurrent.head.value;
}

const linkedListOne = new LinkedList() 
  linkedListOne.insert(4);
  linkedListOne.insert(3);
  linkedListOne.insert(2);
  linkedListOne.insert(1);

const linkedListTwo = new LinkedList();;
linkedListTwo.insert(8);
linkedListTwo.insert(7);
linkedListTwo.insert(6);
linkedListTwo.insert(5);

zipLists(linkedListOne, linkedListTwo);

console.log('linkedListOne:', linkedListOne.toString());
console.log('linkedListTwo:', linkedListTwo.toString());
console.log('ZIPLISTS:', zipLists.toString());








