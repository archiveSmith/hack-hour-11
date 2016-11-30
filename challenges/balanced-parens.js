/*
 * write a function that takes a string of text and returns true if
 * the parentheses are balanced and false otherwise.
 *
 * Example:
 *   balancedParens('(');  // false
 *   balancedParens('()'); // true
 *   balancedParens(')(');  // false
 *   balancedParens('(())');  // true
 *
 * Step 2:
 *   make your solution work for all types of brackets
 *
 * Example:
 *  balancedParens('[](){}'); // true
 *  balancedParens('[({})]');   // true
 *  balancedParens('[(]{)}'); // false

 * Step 3:
 * ignore non-bracket characters
 * balancedParens(' var wow  = { yo: thisIsAwesome() }'); // true
 * balancedParens(' var hubble = function() { telescopes.awesome();'); // false
 *
 *
 */

function balancedParens(input){
	let brackets = input.replace(/[^\)([\][\{}]/g , '');
	console.log(brackets);
  let work = [];
for( let i = 0; i < brackets.length; i++){
    if(brackets[i] === "(" || brackets[i] === "[" || brackets[i] === "{"){
      work.push(brackets[i]);
    } else {
    if(brackets[i] === ")"){
    if(work.indexOf("(") === -1) return false;
    work.splice(work.indexOf("("),1);
    }
     if(brackets[i] === "]"){
    if(work.indexOf("[") === -1) return false;
    work.splice(work.indexOf("["),1);
    }
     if(brackets[i] === "}"){
    if(work.indexOf("{") === -1) return false;
     work.splice(work.indexOf("{"),1);
    }
   
    }
}

return work.length === 0;

}

module.exports = balancedParens;
