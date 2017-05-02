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
	let startChar;
	let comparePos = 0;
	let startPointPossibilities = 0;
	let matched = 0;
	//first check length
	if (s1.length === s2.length) {
		//now use the first character of the string as a starting point for comparison
		s1 = s1.split("");
		startChar = s1[0];
		comparePos = s2.indexOf(startChar);
		startPointPossibilities = s2.split(startChar).length - 1;
		s2 = s2.split("");
		while (startPointPossibilities > 0 && !matched) {
			matched = 1;
			for (let i = 0; i < s1.length; i++, comparePos++) {
			  if (comparePos > s1.length - 1) {
					//start comparison from the beginning of the string now
					comparePos = 0;
				}
				if (s1[i] !== s2[comparePos]) {
					matched = 0;
					startPointPossibilities--;
					break;
				}
			}
		}
			
		if (matched) {
			return true;
		}
	}

	return false;
}

module.exports = {isSubstring: isSubstring, stringRotation: stringRotation};
