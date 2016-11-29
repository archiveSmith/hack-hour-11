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
  if (s2.length === 0 && s1.length === 0) {
    return '';
  } else if (s2.length < s1.length) {
    return false;
  } else if (s2.length === 2 && s1.length === 2) {
    if (s1.indexOf(s2[0]) > -1 && s2.indexOf(s2[1]) > -1) {
      return true;
    }
    return false;
  } else if (!isSubstring(s1, s2.slice(0, 2))) {
    return false;
  } else {
    let copyStr = s2.slice(0);
    for (let i = 0; i < s1.length; i += 1) {

      if (s1 === copyStr) {
        return true;
      }
      copyStr = copyStr.slice(copyStr.length - 1) + copyStr.slice(0, copyStr.length - 1);    
    }
    return false;
  }

}

module.exports = {isSubstring: isSubstring, stringRotation: stringRotation};
