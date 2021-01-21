# Implement a simplified LEFT JOIN for 2 Hashmaps.

- This is the code challenge for class 33 of Code Fellows 401.

- Write a function that LEFT JOINs two hashmaps into a single data structure.
- The first parameter is a hashmap that has word strings as keys and a synonym of the key as values.
- The second parameter is a hashmap that has word strings as keys and antonyms of the key as values.
- Combine the key and corresponding values (if they exist) into a new data structure according to LEFT JOIN logic.
- LEFT JOIN means all the values in the first hashmap are returned, and if values exist in the “right” hashmap, they are appended to the result row. If no values exist in the right hashmap, then some flavor of NULL should be appended to the result row.
- The returned data structure that holds the results is up to you. It doesn’t need to exactly match the output below, so long as it achieves the LEFT JOIN logic.
- Avoid utilizing any of the library methods available to your language.

## Testing

- Write tests to validate the following functionality:

  - [x] It returns a joined matrix.
  - [x] It returns null if either the first or right hashmaps is empty.
  - [x] It returns an array in which the second index is null in each sub-array when no keys match between the two tables.

## Approach & Efficiency

- O(1) for time: O(n^2) because of a loop within a loop.
- O(1) for space: O(n) because the results array can be n items long.

## Solution

[Coded Solution](./left-join.js)
![Whiteboard](../../assets/code-challenge33.png)
