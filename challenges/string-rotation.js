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
  if(!s1 || !s2 || s1 === undefined || s2 === undefined) {
    return false;
  }

  const string1 = s1;
  const string2 = s2;
  const array1 = string1.split("");
  let array2 = string2.split("");
  let flag = false;
  let temp;

  for(let i = 0; i < array2.length; i += 1) {

    if (array1.join("") == array2.join("")) {
      flag = true;
    }

    else if (array1.join("") !== array2.join("")) {
      temp = array2.pop();
      array2.unshift(temp);
    }
  }
  return flag;
}

module.exports = {isSubstring: isSubstring, stringRotation: stringRotation};
