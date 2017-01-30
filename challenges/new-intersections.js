/**
 *
 * You are given an array x and an array y that represent the coordinates of several OLD points
 * 
 *   - x is the array of x-coordinates and y is the array of y-coordinates 
 *   - (x[i], y[i]) correspond to coordinates of the i'th OLD point
 *
 * Write an algorithm to find the number of NEW points that can be placed 
 * such that there are OLD points above, below, to the left, and to the right of the NEW point
 *
 *   - 'OLD directly above NEW' means the NEW x-coordinate = OLD x-coordinate & NEW y-coordinate < OLD y-coordinate
 *
 * Constraints and Notes:
 *
 * 	 - x and y will contain the same number of elements
 *   - if a new point is bounded by old points and lands on an old point, then count it
 * 	 
 */
function newIntersections(x, y){
	let xMin = Math.min(...x);
	let yMin = Math.min(...y);
	let xMax = Math.max(...x);
	let yMax = Math.max(...y);
	let coords = [];
	for(let i = xMin; i <= xMax; i++){
		for(let k = yMin; k <= yMax; k++){
		 if(x.indexOf(i) !== x.lastIndexOf(i)){
		   if((y[x.indexOf(i)] < k && y[x.lastIndexOf(i)] < k) || (y[x.indexOf(i)] > k && y[x.lastIndexOf(i)] > k)  ){
		   } else{
		     coords.push(i.toString() + k.toString());
		   }
		 }
		 
		 if(y.indexOf(k) !== y.lastIndexOf(k)){
		   if((x[y.indexOf(k)] < i && x[y.lastIndexOf(k)] < i) || (x[y.indexOf(k)] > i && x[y.lastIndexOf(k)] > i)  ){
		   } else{
		     coords.push(i.toString() + k.toString());
		   }
		 }


		}
	}
	let ans =0;
for(let z = 0; z < coords.length; z++){
  console.log(coords.indexOf(coords[z]))
   console.log(coords.lastIndexOf(coords[z]))
  if(coords.indexOf(coords[z]) !== coords.lastIndexOf(coords[z])){
    ans++;
  }
}
return ans/2;
}

module.exports = newIntersections;
