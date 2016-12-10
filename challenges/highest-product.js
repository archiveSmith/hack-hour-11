/**
 * Given an array of integers, find the highest product you can get from three of the integers.
 */


function highestProduct(array) {
  if(array.length<3){
    return 0;
  }
  let arr = array.sort((a,b)=>a-b);
  let pos = arr.slice(-3);
  let neg = arr.slice(0,2);
  neg.push(arr[arr.length-1]);
  let nr =  neg.reduce((acc, curr)=>acc*=curr);
  let pr = pos.reduce((acc, curr)=>acc*=curr);
  if(nr>pr){
    return nr;
  }else{
    return pr;
  }
}

module.exports = highestProduct;
