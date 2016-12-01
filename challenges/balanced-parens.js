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
 *
 * Step 3:
 * ignore non-bracket characters
 * balancedParens(' var wow  = { yo: thisIsAwesome() }'); // true
 * balancedParens(' var hubble = function() { telescopes.awesome();'); // false
 *
 *
 */


function balancedParens(input){
	let newStr = '';
	let symbols = input.replace(/[a-zA-Z=:]+/g,'');
	for(let i = 0; i< symbols.length; i++){
    if(symbols[i].includes(')') ) {
    	newStr+=symbols[i];
    }else if(symbols[i].includes('(')){
    	newStr+=symbols[i];
    }else if(symbols[i].includes('[')){
    	newStr+=symbols[i];
    }else if(symbols[i].includes(']')){
    	newStr+=symbols[i];
    }else if(symbols[i].includes('{')){
    	newStr+=symbols[i];
    }else if(symbols[i].includes('}')){
    	newStr+=symbols[i];
    }  	
}
 if(newStr.length%2!==0){
    return false;
  }else{
  return true;
  }
}


module.exports = balancedParens;