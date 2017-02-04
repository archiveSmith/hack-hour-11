/**
 * Given an array of integers, find the highest product you can get from three of the integers.
 *///

function highestProduct(array) {
  if (!array || array.length < 3){
    return 0
  }
  let allPos;
  let result;
  let result2;
  array.sort(function(a,b){
    return a-b;
  });
  allPos = array.slice(-3)
  result1 = allPos.reduce(function(a, c){
                return a = a*c;
                  });
  result2 = array.slice(0,1) * array.slice(-2,-1) * array.slice(-1);
 
  return Math.max(result1, result2)
}


module.exports = highestProduct;
