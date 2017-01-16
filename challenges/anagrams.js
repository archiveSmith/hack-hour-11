/**
 * Given a single input string, write a function that produces all possible anagrams
 * of a string and outputs them as an array. At first, don't worry about
 * repeated strings.  What time complexity is your solution?
 *
 * Extra credit: Deduplicate your return array without using uniq().
 */

/**
  * example:
  * var result = anagrams('abc');
  * console.log(result); // [ 'abc', 'acb', 'bac', 'bca', 'cab', 'cba' ]
  */
function anagrams(string) {
  function rFact(num)
{
    if (num === 0)
      { return 1; }
    else
      { return num * rFact( num - 1 ); }
}
  
  let matchArr = string.split('');
  let matches = 0;
  for(let i = 0; i < string.length; i++){
    let a = matchArr.lastIndexOf(string[i]); 
    if(a > i){
      matches++;
      matchArr.splice(a,1);
    }
  }
  
   let loopLen = rFact(string.length-matches);
	let answer = [];
	let work = string.split('');
	while(answer.length < loopLen){
  let curr = [];
  let str = string.split('');;
    while(curr.length < string.length){
      let ran = Math.floor(Math.random()*str.length);
      curr.push(str[ran]);
    str.splice(ran,1);
    }

    let check = curr.join('');
    if(answer.indexOf(check) === -1){
    answer.push(curr.join(''));
    }
	 }
	
	return answer;
}


module.exports = anagrams;
