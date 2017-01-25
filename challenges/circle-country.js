/**
 *  Circle Country is a country that contains several circular-shaped districts.
 *  Some districts may be situated inside other districts, but their borders do not intersect or touch.
 *  Tyus is a resident of Circle Country. When he travels between two locations, he always tries to cross the fewest number of district borders as possible.
 *
 *  You are given an array x, an array y, and an array r
 *
 *    - (x[i],y[i]) are the coordinates of the i-th circle's center and r[i] is its radius
 *
 *  In addition to the arrays, you are also given the numbers start_x, start_y, end_x, and end_y
 *
 *    - (start_x, start_y) are Tyus' starting coordinates and (end_x, end_y) are Tyus' destination coordinates
 *
 *
 *  Write an efficient algorithm for finding the minimum number of district borders Tyus must cross in order to get from
 *  (start_x, start_y) to (end_x, end_y)
 *
 *  Constraints:
 *    - x, y and r will each contain the same number of elements
 *    - (start_x, start_y) and (end_x, end_y) will never lie on a circle's border
 *    - no circle borders intersect/touch (but they can be nested)
 *
 */

// function circleCountry(x, y, r, start_x, start_y, end_x, end_y) {
// 	let borderCount = 0;
// 	let slopeRise = (end_y - start_y)/10;
// 	let slopeRun = (end_x - start_x)/10;
// 	let inCircles = [];

// 	while(start_x < end_x && start_y < end_y){
// 		for(let i = 0; i < x.length; i++){
// 			if(isInCircle(start_x, start_y, x[i], y[i], r[i])){
// 			  console.log(i)
// 			  if(i === 0){
// 			    inCircles.push(i);
// 			  }else
// 				if(inCircles.indexOf(i) === -1){
// 				 // borderCount++;
// 					inCircles.push(i);
// 				}
// 			} else {
// 				if(inCircles.indexOf(i) !== -1){
// 				  console.log('dfsdfsd')
// 					inCircles.splice(i,1);
// 					borderCount++;
// 				}
// 			}

// 		}




// 		start_x += slopeRun;
// 		start_y += slopeRise
// 	}

// 	function isInCircle(x,y,center_x, center_y, radius){
// 	 // console.log( Math.pow((x - center_x),2) + Math.pow((y - center_y),2) ,  Math.pow(radius, 2) );
// 		if((Math.pow((x - center_x),2) + Math.pow((y - center_y),2)) < Math.pow(radius, 2)) return true;
// 		return false;
// 	}
// 	return borderCount;

// }

function circleCountry(x, y, r, start_x, start_y, end_x, end_y) {
	let startInCircles = [];
	let endInCircles = [];
	for(let i = 0; i < x.length; i++){
	  if(isInCircle(start_x, start_y, x[i], y[i], r[i]) && isInCircle(end_x, end_y, x[i], y[i], r[i])){
	    
	  }else
	  if(isInCircle(start_x, start_y, x[i], y[i], r[i])){
	    startInCircles.push(i);
	  }else
	  if(isInCircle(end_x, end_y, x[i], y[i], r[i])){
	    endInCircles.push(i);
	  }else{
	  }
	  }

	function isInCircle(x,y,center_x, center_y, radius){
	 // console.log( Math.pow((x - center_x),2) + Math.pow((y - center_y),2) ,  Math.pow(radius, 2) );
		if((Math.pow((x - center_x),2) + Math.pow((y - center_y),2)) < Math.pow(radius, 2)) return true;
		return false;
	}
	return startInCircles.length + endInCircles.length;

}
module.exports = circleCountry;
