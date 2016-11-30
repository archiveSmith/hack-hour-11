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
  return s2.includes(s1);
}

function stringRotation(s1, s2) {
  const len = s1.length;
  const s1Check = { start: 0, end: 0, length: 0 };
  let expander = 2;
  for (let i = 0; i < len; i ++) {
    const sub = s1.substring(i, i + expander);
    if (isSubstring(sub, s2) & sub.length > s1Check.length) {
      s1Check.start = i;
      s1Check.end = i + expander;
      s1Check.length = sub.length;
      i = 0;
      expander += 1;
    }
  }
  let substr = s1.substring(s1Check.start, s1Check.end);
  let other = s1.replace(substr, '');
  if (s1Check === 0) {
    return other + substr === s2;
  } else {
    return substr + other === s2;
  }
}

module.exports = {isSubstring: isSubstring, stringRotation: stringRotation};
