/* Given a positive integer, return it as a string in Roman Numeral form.
 * Some basic conversions are given below:
 *
 *      1     ->    I
 *      4     ->    IV
 *      5     ->    V
 *      9     ->    IX
 *      10    ->    X
 *      40    ->    XL
 *      50    ->    L
 *      90    ->    XC
 *      100   ->    C
 *      400   ->    CD
 *      500   ->    D
 *      900   ->    CM
 *      1000  ->    M
 * 
 *///

function romanNumeral(n) {
let numeralArr = [];
let numStr = n.toString(); 
if (numStr[numStr.length-1] === '1'){
    numeralArr.unshift('I')
} else if (numStr[numStr.length-1] === '2'){
    numeralArr.unshift('II')
} else if (numStr[numStr.length-1] === '3'){
    numeralArr.unshift('III')
} else if (numStr[numStr.length-1] === '4'){
    numeralArr.unshift('IV')
} else if (numStr[numStr.length-1] === '5'){
    numeralArr.unshift('V')
} else if (numStr[numStr.length-1] === '6'){
    numeralArr.unshift('VI')
} else if (numStr[numStr.length-1] === '7'){
    numeralArr.unshift('VII')
} else if (numStr[numStr.length-1] === '8'){
    numeralArr.unshift('VIII')
} else if (numStr[numStr.length-1] === '9'){
    numeralArr.unshift('IX')
} 
if (numStr[numStr.length-2] === '1') {
  numeralArr.unshift('X')
} else if (numStr[numStr.length-2] === '2') {
  numeralArr.unshift('XX')
} else if (numStr[numStr.length-2] === '3') {
  numeralArr.unshift('XXX')
} else if (numStr[numStr.length-2] === '4') {
  numeralArr.unshift('XL')
} else if (numStr[numStr.length-2] === '5') {
  numeralArr.unshift('L')
} else if (numStr[numStr.length-2] === '6') {
  numeralArr.unshift('LX')
} else if (numStr[numStr.length-2] === '7') {
  numeralArr.unshift('LXX')
} else if (numStr[numStr.length-2] === '8') {
  numeralArr.unshift('LXXX')
} else if (numStr[numStr.length-2] === '9') {
  numeralArr.unshift('XC')
}
if (numStr[numStr.length-3] === '1') {
  numeralArr.unshift('C')
} else if (numStr[numStr.length-3] === '2') {
  numeralArr.unshift('CC')
} else if (numStr[numStr.length-3] === '3') {
  numeralArr.unshift('CCC')
} else if (numStr[numStr.length-3] === '4') {
  numeralArr.unshift('CD')
} else if (numStr[numStr.length-3] === '5') {
  numeralArr.unshift('D')
} else if (numStr[numStr.length-3] === '6') {
  numeralArr.unshift('DC')
} else if (numStr[numStr.length-3] === '7') {
  numeralArr.unshift('DCC')
} else if (numStr[numStr.length-3] === '8') {
  numeralArr.unshift('DCCC')
} else if (numStr[numStr.length-3] === '9') {
  numeralArr.unshift('CM')
}
if (numStr[numStr.length-4] === '1') {
  numeralArr.unshift('M')
}
return numeralArr.join("")
}

module.exports = romanNumeral;
