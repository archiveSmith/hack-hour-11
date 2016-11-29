'use strict';
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
	if (typeof s1 !== 'string' || typeof s2 !== 'string') return undefined;
	if (s1.length < 1 || s2.length < 1) return false;
	if (s1 === s2) return true;
	let s2arr = s2.split('');
	let targetIndex = s2arr.indexOf(s1[0]);
	let count = 0;

	while (count < targetIndex - 1) {
		let num = s2arr.pop();
		s2arr.unshift(num);
		count += 1;
	}

	const s2edit = s2arr.join('')

	return s1 === s2edit;
}

module.exports = {isSubstring: isSubstring, stringRotation: stringRotation};