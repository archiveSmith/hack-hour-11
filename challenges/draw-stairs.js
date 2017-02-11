/* Write a function that console logs a staircase of any given height where 1 <= N <= 100.
<<<<<<< HEAD
 + The staircase must climb up from left to right. The last line should only consist of asterisks,
 + without any leading/trailing spaces.
 + 
 + For example:     
 + drawStairs(6) ->          
 +     *
 +    **
 +   ***
 +  ****
 + *****
 +******
 +//
 +*/
 
 function drawStairs(n) {
  let first = "";
  let result ='';

  for (let i = 1; i<=n; i++) {
    first += ' ';
}


let second = ''

for (let j = n-1; j>=0; j--){
	first = first.slice(0, j);
	second += '*';
	result = first + second;
	console.log(result)
}
 }
 
 
 module.exports = drawStairs;
=======
 The staircase must climb up from left to right. The last line should only consist of asterisks,
 without any leading/trailing spaces.
 
 For example:     
 drawStairs(6) ->          
     *
    **
   ***
  ****
 *****
******

*/

function drawStairs(n) {

}


module.exports = drawStairs;
>>>>>>> fe0e09e39e24b93f6b7ba7713891d144539a85b7
