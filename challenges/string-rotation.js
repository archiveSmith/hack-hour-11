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
	if(s1 === undefined || s1 === "" && s2 === undefined || s2 === ""){
		return false;
	}
	let a2 = s2.split('');
	let a1 = s1[0];
	let i = a2.indexOf(a1);
	let newString = [];
	a2.unshift(a2.splice(i));
	a2 = a2.join('').replace(/,/g, '');
	return isSubstring(s1, a2);
}

module.exports = {isSubstring: isSubstring, stringRotation: stringRotation};
