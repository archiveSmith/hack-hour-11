// given 4 arrays that may contain both numbers and strings
// return a new array with the numbers and/or strings that appear in all 4 arrays
// duplicates are only counted once;
// for example == given the following input
//aa
  // var array1 = [1,4,6,7,'ferret',12,12,99,2000,'dog','dog',99,1000];
  // var array2  = [15,9,9,'ferret',9,26,12,12,'dog'];
  // var array3 = [23,12,12,77,'ferret',9,88,100,'dog'];
  // var array4 = ['ferret',12,12,45,9,66,77,78,2000];

// your output would be [ 12, 'ferret']

// if there are no common numbers or strings return the string "Nothing in Common!"

// function commonElements(array1, array2, array3, array4){
// 	 return [...arguments].reduce((acc, ele) => acc.length === 0 ? acc = [] : ele.length < acc.length ? ele : acc, arguments[0]).reduce((acc, ele) => array1.indexOf(ele) !== -1 ? array2.indexOf(ele) !== -1 ? array3.indexOf(ele) !== -1 ? array4.indexOf(ele) !== -1 ?  acc === "Nothing in Common!" ? acc = [ele] : acc.indexOf(ele) !== -1 ? acc : acc.concat([ele]) : acc: acc: acc: acc, "Nothing in Common!");
// }


function commonElements(array1, array2, array3, array4){
    return [...arguments].reduce((acc, ele) => acc.length === 0 ? acc = [] : ele.length > acc.length ? ele : acc, arguments[0]).reduce((acc,ele,ind) => {acc[0][0][arguments[0][ind]] = arguments[0][ind]; acc[0][1][arguments[1][ind]] = arguments[1][ind]; acc[0][2][arguments[2][ind]] = arguments[2][ind]; acc[0][3][arguments[3][ind]] = arguments[3][ind]; return acc;} ,[[{},{},{},{}]]).reduce((acc, ele, ind, arr) =>{for(let a in arr[0][0]){arr[0][0].hasOwnProperty(ele[0][a]) ? arr[0][1].hasOwnProperty(ele[1][a]) ? arr[0][2].hasOwnProperty(ele[2][a]) ? arr[0][3].hasOwnProperty(ele[3][a]) ?  acc === "Nothing in Common!" ? acc = [ele[0][a]] : acc.indexOf(ele) !== -1 ? acc : acc = acc.concat([ele[0][a]]) : acc: acc: acc: acc} return acc}, "Nothing in Common!");
}

module.exports = commonElements;
