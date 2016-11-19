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
  let total = 0;
  let objMode = {};
  let modeAns;

  function mean(arr) {
    total = arr.reduce( function(total1, el) {
      return total += el;
    });

    return Math.floor(total/(arr.length - 1));
  }

  function mode(arr) {
    let max = 0;
    let ans;

    for (let i = 0; i < arr.length; i++) {
      if (objMode[arr[i]]) {
        objMode[arr[i]]++;
      }
      else {
        objMode[arr[i]] = 1;
      }
    }

    for (var key in objMode) {
      if (objMode[key] === max) {
        if (key > ans) {
          ans = key;
        }
      }

      else if (objMode[key] > max) {
        max = objMode[key];
        ans = key;
      }
    }
    console.log(ans)
    return max;
  }


  if (array.length === 1) {
    return true;
  }
  else {
    return mode(array) === mean(array);
  }
}

module.exports = modemean;
