/**
 * applies the invoked array to the function's parameter list
 * Example:
 *   var jae = function(name, age, location) {
 *     return name + " is " + age + " and he lives in " + location;
 *   };
 *
 *   var jaero = applyIt(jae, ["Jae", 19, "South Carolina"]);
 *   jaero(); //Returns "Jae is 19 and he lives in South Carolina"
 *
 * Another Example:
 *   var jasmine = function(name, age) {
 *     if(!age){
 *       return "We don't know how old " + name + " is!";
 *     }
 *
 *     else{
 *       return name + " is " + age + " years old!";
 *     }
 *   };
 *
 *   var jmoney = applyIt(jasmine, ["Jasmine"]);
 *   jmoney(); //Returns "We don't know how old Jasmine is!"
 *
 *  DO NOT USE THE BUILT IN APPLY METHOD OR THE SPREAD OPERATOR
 */

function applyIt(func, args) {
	var funcArgs = arguments[1].slice();

	var params = "";
	for (var i = 0; i < funcArgs.length; i++) {
		params += "'" + funcArgs[i] + "',";
	}

	if (funcArgs.length) {
		params = params.substring(0, params.length - 1);
	}

	var funcString = func.name + "(" + params + ")";

	//console.log("fs: ", funcString);

	return function() {
		eval(funcString);
	}

}

// var jae = function(name, age, location) {
// 	console.log("FUNC ARs: ", name, age, location);
//    return name + " is " + age + " and he lives in " + location;
//    };

// var jaero = applyIt(jae, ["Jae", 19, "South Carolina"]);
// console.log(jaero()); //Returns "Jae is 19 and he lives in South Carolina"

module.exports = applyIt;
