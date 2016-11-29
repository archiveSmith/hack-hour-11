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
	while(i < a2.length){
		newString.push(a2[i]);
		i++;
	}

	i = a2.indexOf(a1[0]);
	let a = 0;
	while(a < i) {
		newString.push(a2[a]);
		a++;
	}

	newString = newString.join('');
	return isSubstring(s1, newString);
}

module.exports = {isSubstring: isSubstring, stringRotation: stringRotation};
