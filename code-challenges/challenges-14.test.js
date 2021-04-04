'use strict';

/* ------------------------------------------------------------------------------------------------
CHALLENGE 1 - Review

Complete the createServer function to include the following routes:
- a GET request to "/"" should respond with status of 200;
- a DELETE request to "/things/1" should respond with status of 405;
- any other route should return status of 404.
------------------------------------------------------------------------------------------------ */
const createServer = () => {
  const express = require('express');
  const app = express();

  // solution code goes here ...
  app.get('/', (req, res) => res.status(200).send());
  app.delete('/things/1', (req, res) => res.status(405).send());
  app.use('*', (req, res) => res.status(404).send());

  const server = app.listen(3000, function () {
    // const port = server.address().port;
    // console.log('Example app listening at port', port);
  });
  return server;
};

/* ------------------------------------------------------------------------------------------------
CHALLENGE 2

Write a function named toTitleCase that takes in an array of strings and returns an array of strings with the first character in upper case and the rest as is.

For example, ['apple', 'banana', 'MacGyver'] returns ['Apple', 'Banana', 'MacGyver'].
------------------------------------------------------------------------------------------------ */

const toTitleCase = (arr) => {
  // Solution code here...
  return arr.map(string => string.charAt(0).toUpperCase() + string.slice(1));
};

/* ------------------------------------------------------------------------------------------------
CHALLENGE 3

Write a function named biggerThanLuke that, given the Star Wars data below, returns the names of the characters whose mass is greater than Luke's.

The names should be combined into a single string with each character name separated by a dash.

For example, "Lando Calrisian - Boba Fett - Princess Amidala".
------------------------------------------------------------------------------------------------ */

let starWarsData = [{
  name: 'Luke Skywalker',
  height: '172',
  mass: '77',
  hair_color: 'blond',
  skin_color: 'fair',
  eye_color: 'blue',
  birth_year: '19BBY',
  gender: 'male',
},
{
  name: 'C-3PO',
  height: '167',
  mass: '75',
  hair_color: 'n/a',
  skin_color: 'gold',
  eye_color: 'yellow',
  birth_year: '112BBY',
  gender: 'n/a'
},
{
  name: 'R2-D2',
  height: '96',
  mass: '32',
  hair_color: 'n/a',
  skin_color: 'white, blue',
  eye_color: 'red',
  birth_year: '33BBY',
  gender: 'n/a'
},
{
  name: 'Darth Vader',
  height: '202',
  mass: '136',
  hair_color: 'none',
  skin_color: 'white',
  eye_color: 'yellow',
  birth_year: '41.9BBY',
  gender: 'male'
},
{
  name: 'Leia Organa',
  height: '150',
  mass: '49',
  hair_color: 'brown',
  skin_color: 'light',
  eye_color: 'brown',
  birth_year: '19BBY',
  gender: 'female'
},
{
  name: 'Pex Kylar',
  height: '180',
  mass: '190',
  hair_color: 'orange',
  skin_color: 'brown',
  eye_color: 'none',
  birth_year: '27BBY',
  gender: 'n/a'
}];

let biggerThanLuke = (arr) => {
  // Solution code here...
  return arr.reduce((acc, val) => {
    if (parseInt(val.mass) > parseInt(arr[0].mass)) {
      acc.push(val.name);
      return acc;
    } else {
      return acc;
    }
  }, [])
    .join(' - ');
};

/* ------------------------------------------------------------------------------------------------
CHALLENGE 4
Write a function named sortBy that takes in an array of objects, each of which has a particular property, and sorts those objects by that property, lowest to highest, returning the same array.

Here is an example of the input:
[
  {name: 'Sweatshirt', price: 45},
  {name: 'Bookmark', price: 2.50},
  {name: 'Tote bag', price: 15}
];

This data could be sorted by name or price.
------------------------------------------------------------------------------------------------ */

const sortBy = (property, arr) => {
  // Solution code here...
  return arr.sort((a, b) => (a[property] < b[property] ? -1 : 1));
};

/* ------------------------------------------------------------------------------------------------
CHALLENGE 5 - Stretch Goal

Write a function that determines if a given URL is secure, beginning with https://

Guard against malformed URLs, such as: https:missing-slashes.bad

For example:
http://www.insecure.com returns false because the URL is not secure
https://secure.com returns true because the URL is secure
https:/missingslash.org returns false because the URL is malformed
------------------------------------------------------------------------------------------------ */
const isSecure = (url) => {
  // Solution code here...
  const regex = /(https:\/\/)/gmi;
  return url.match(regex) ? true : false;
};

/* ------------------------------------------------------------------------------------------------
CHALLENGE 6 - Stretch Goal

Write a function named detectTicTacToeWin that accepts a two-dimensional array of strings. Each string is guaranteed to be either "X", "O" or an empty string. Your function should check to see if any row, column, or either diagonal direction has three matching "X" or "O" symbols (non-empty strings), three-in-a-line.

This function should return either true or false to indicate if someone won the game.

Instead of trying to write crazy for-loops to automate checking the rows, columns and diagonals, consider writing one helper function that accepts three coordinate pairs and checks the values of the array at those locations. For instance helpCheck(row1, col1, row2, col2, row3, col3).

Your function does not need to work for boards of any size other than 3x3.

Here is a sample board:
[
  ['X', '', 'O'],
  ['X', 'O', ''],
  ['X', 'O', 'X'],
];
------------------------------------------------------------------------------------------------ */

const detectTicTacToeWin = (board) => {
  // Solution code here...
  const row1 = board[0];
  const row2 = board[1];
  const row3 = board[2];

  const col1 = [board[0][0], board[1][0], board[2][0]];
  const col2 = [board[0][1], board[1][1], board[2][1]];
  const col3 = [board[0][2], board[1][2], board[2][2]];

  return helpCheck(row1, col1, row2, col2, row3, col3);
};

const helpCheck = (row1, col1, row2, col2, row3, col3) => {
  if (row1[0] === 'X' && row1[1] === 'X' && row1[2] === 'X' || row1[0] === 'O' && row1[1] === 'O' && row1[2] === 'O') return true;
  else if (row2[0] === 'X' && row2[1] === 'X' && row2[2] === 'X' || row2[0] === 'O' && row2[1] === 'O' && row2[2] === 'O') return true;
  else if (row3[0] === 'X' && row3[1] === 'X' && row3[2] === 'X' || row3[0] === 'O' && row3[1] === 'O' && row3[2] === 'O') return true;
  else if (col1[0] === 'X' && col1[1] === 'X' && col1[2] === 'X' || col1[0] === 'O' && col1[1] === 'O' && col1[2] === 'O') return true;
  else if (col2[0] === 'X' && col2[1] === 'X' && col2[2] === 'X' || col2[0] === 'O' && col2[1] === 'O' && col2[2] === 'O') return true;
  else if (col3[0] === 'X' && col3[1] === 'X' && col3[2] === 'X' || col3[0] === 'O' && col3[1] === 'O' && col3[2] === 'O') return true;
  else if (row1[0] === 'X' && row2[1] === 'X' && row3[2] === 'X' || row1[0] === 'O' && row2[1] === 'O' && row3[2] === 'O') return true;
  else if (row1[2] === 'X' && row2[1] === 'X' && row3[0] === 'X' || row1[2] === 'O' && row2[1] === 'O' && row3[0] === 'O') return true;
  else return false;
};

/* ------------------------------------------------------------------------------------------------
TESTS

All the code below will verify that your functions are working to solve the challenges.

DO NOT CHANGE any of the below code.

Run your tests from the console: jest challenge-14.test.js

------------------------------------------------------------------------------------------------ */

describe('Testing challenge 1', function () {

  const request = require('supertest');

  let server;

  beforeEach(function () {
    server = createServer();
  });

  afterEach(function () {
    server.close();
  });

  test('responds to /', function testSlash(done) {
    request(server)
      .get('/')
      .expect(200, done);
  });

  test('responds to /things/1', function testSlash(done) {
    request(server)
      .delete('/things/1')
      .expect(405, done);
  });

  test('404 everything else', function testPath(done) {
    request(server)
      .get('/foo/bar')
      .expect(404, done);
  });
});

describe('Testing challenge 2', () => {
  test('It should convert each word to title case', () => {
    const words = ['apple', 'banana', 'MacGyver'];
    expect(toTitleCase(words)).toStrictEqual(['Apple', 'Banana', 'MacGyver']);

    expect(toTitleCase([])).toStrictEqual([]);
  });
});

describe('Testing challenge 3', () => {
  test('It should return only characters that are bigger than Luke', () => {
    expect(biggerThanLuke(starWarsData)).toStrictEqual('Darth Vader - Pex Kylar');
    expect(biggerThanLuke([])).toStrictEqual('');
  });
});

describe('Testing challenge 4', () => {
  test('It should sort items by a price', () => {

    expect(sortBy('price', [
      { name: 'Sweatshirt', price: 45 },
      { name: 'Bookmark', price: 2.50 },
      { name: 'Tote bag', price: 15 }
    ])).toStrictEqual([
      { name: 'Bookmark', price: 2.50 },
      { name: 'Tote bag', price: 15 },
      { name: 'Sweatshirt', price: 45 },
    ]);

  });

  test('It should sort items by name', () => {

    expect(sortBy('name', [
      { name: 'Sweatshirt', price: 45 },
      { name: 'Bookmark', price: 2.50 },
      { name: 'Tote bag', price: 15 }
    ])).toStrictEqual([
      { name: 'Bookmark', price: 2.50 },
      { name: 'Sweatshirt', price: 45 },
      { name: 'Tote bag', price: 15 },
    ]);
  });
});

describe('Testing challenge 5', () => {
  test('It should check if url is https', () => {

    expect(isSecure('http://www.insecure.com')).toBe(false);
    expect(isSecure('https://secure.com')).toBe(true);
    expect(isSecure('https:/missingslash.org')).toBe(false);
  });
});

describe('Testing challenge 6', () => {
  test('It should return true if there are three in a row', () => {
    expect(detectTicTacToeWin([['X', '', 'O'], ['X', 'O', ''], ['X', 'O', 'X']])).toStrictEqual(true);
    expect(detectTicTacToeWin([['O', '', 'X'], ['X', 'O', 'X'], ['X', '', 'O']])).toStrictEqual(true);
  });

  test('It should return false if there are not three in a row', () => {
    expect(detectTicTacToeWin([['X', '', 'O'], ['O', 'O', ''], ['X', 'O', 'X']])).toStrictEqual(false);
  });

  test('It should not treat empty 3 in row as winner', () => {
    expect(detectTicTacToeWin([['', '', ''], ['O', 'O', ''], ['X', 'O', 'X']])).toEqual(false);
  });
});
