/*
 * Given an array of numbers, determine if the mode and mean of the array are equivalent
 *
 * Caveats:
 * 	- Math.floor the mean
 * 	- If there are multiple modes, use the max of the modes
 *
 * Return true or false
 *
 */

function modemean(array) {
 let mode;
 let mean1;

 function mostOcc(array){
   var table ={};
   var ans = {num:null,count:0}
   array.map(function(x){return table[x] === undefined ? table[x] = 1 : table[x] +=1});
   for (let key in table){
     if (table[key] > ans.count) {
       ans.num = key;
       ans.count = table[key];
	}
  }
  mode = parseInt(ans.num);
 }

  
  
 function meanFunc(array) {
   let mean = 0;
   for(let i = 0; i < array.length; i ++){
    mean += array[i];
   }
   mean1 =(Math.floor(mean / array.length));
 }
  
 mostOcc(array);
 meanFunc(array);
    
 if(mode === mean1){
   return true;
 }
   return false;
   
}



module.exports = modemean;
  
  
