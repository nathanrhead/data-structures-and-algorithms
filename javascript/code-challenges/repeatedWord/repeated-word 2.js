'use strict';

const HashMap = require('../hashtables/hashtable');

function repeatedWord(lengthyString) {
  if (typeof(lengthyString) != 'string') return null;

  const regex = /\w/g;
  const wordArray = [];
  const word = lengthyString.match(regex);
  console.log('Word:', word);

}