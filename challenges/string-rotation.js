/* Given two strings, write a function to check if the second one is a rotation of the first,
 * using only one call to isSubstring. The function isSubstring takes in two strings and returns
 * true if the second string is found in the first, false otherwise.
 *
 * h->e->l->l->o   ===   l->l-o->h->e
 * h->e->l->l->o   !==   o->l-l->h->e
 *
 * For example: stringRotation("hello", "hello") -> true
 *              stringRotation("hello", "llohe") -> true
 *              stringRotation("hello", "he") -> false
 *              stringRotation("hello", "ollhe") -> false (not a rotation, just an anagram)
 */

function isSubstring(s1, s2) {
  return s1.indexOf(s2) >= 0;
}

function stringRotation(s1, s2) {
  let collection = [];
  let counter = 0;
  let arr = s1.split("");
  while (counter < arr.length) {
    arr[arr.length] = arr[0];
    arr = arr.slice(1);
    collection.push(arr.join(""));
    counter += 1;
  }
  return collection.indexOf(s2) !== -1;
}

module.exports = {isSubstring: isSubstring, stringRotation: stringRotation};
