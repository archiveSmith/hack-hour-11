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
	//iterate over every element in array 
	//check if following element is in proper sequence
	//if not return false
	//if i is greater than word.length-1 go back to 0;


	//this is challenging because we don't know where to start...

	//how about this?
	//we can find the first letter, keep checking the next to see if it's in order
	//if not, find the other letter that matches the first letter, if no other foubd, return false 

	
	//doesnt work, need to go back and fix it!!

	let newStr = s2 + s2;
	
	return isSubstring(newStr,s1);

	

}

console.log(stringRotation("hello", "he"))
module.exports = {isSubstring: isSubstring, stringRotation: stringRotation};
