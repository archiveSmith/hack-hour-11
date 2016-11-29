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
  if (s1 === s2) return true;
  // let dictionary store all rotations of s1
  const dictionary = [];
  // split s1
  const s1split = s1.split('');
  for (let i = 0; i < s1.length; i++) {
    // move first element of s1split to the end for every iteration and push to dictionary
    let temp = s1split.shift();
    s1split.push(temp);
    dictionary.push(s1split.join(''));
  }
  return dictionary.includes(s2);
}

module.exports = {isSubstring: isSubstring, stringRotation: stringRotation};
