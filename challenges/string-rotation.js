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

	let newS1 = s1.split("");
	let newS2 = s2.split("");

	for (var i = 0;i < newS2.length-1; i++){
		if (newS2[i] === newS1[0]){
			for (var j = i; j-1;j++){
				if (j > newS2.length-1){
					j = 0
				}
				if (newS2[j] !== newS1[])

			}
		}
	}
	//doesnt work, need to go back and fix it!!

	

}

//console.log(stringRotation("hello","llohe"))
module.exports = {isSubstring: isSubstring, stringRotation: stringRotation};
