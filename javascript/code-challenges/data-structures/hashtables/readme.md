# Create a Hashtable

- This is the code challenge for class 30 of Code Fellows 401.
- Implement a Hashtable with the following methods:

  - add: takes in both the key and value, hashes the key, and adds the key and value pair to the table, handling collisions as needed.
  - get: takes in the key and returns the value from the table.
  - contains: takes in the key and returns a boolean, indicating if the key exists in the table already.
  - hash: takes in an arbitrary key and returns an index in the collection.

## Testing

- Write tests to validate the following functionality:

  - [x] it adds a key/value to your hashtable results;
  - [x] it handles a collision within the hashtable;
  - [x] it hashes a key to an in-range value.
  - [x] it retrieves a key-value pair based on the key and returns the value;
  - [x] it retrieves a value from a bucket within the hashtable that has a collision;
  - [x] it returns null when attempting to get() a value by a key that doesn't exist in the table;
  - [x] it returns true if a key already exists in the table and false if it does not. [It will return true, but it returns undefined for keys that aren't in the table.]

## Approach & Efficiency

- O(1) for time, unless there's a collision, in which case a search takes as much time--O(n)--as there are nodes in vertical linked list.
- O(1) for space, since the size of the hashtable is always known and constant, except in the case of a collision, in which case space becomes O(n).

## Solution

[Coded Solution](./hashtable.js)

