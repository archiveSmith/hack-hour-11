/**
* Part 1:
* You are given an array of arrays.  The subarrays are first names and phone numbers.
*
* Example:
*   jazbook = [
*     ['alex','301-844-3421'],
*     ['jae','301-844-1211'],
*     ['david','301-844-0978'],
*     ['travis','301-844-8505']
*     ['jasmine','1800-974-4539'],
*   ];
*
* jazbooks are not always sorted...
*
* Develop a function that takes in a jazbook and a name, searches through the jazbook and
* returns the persons phone number. If the person does not exists, return false.
*
* How efficient can you make this?
* Part 2: 
* Why are we storing names and phone numbers in an array?
* develop a function that takes in the poorly constructed jazbook and returns a proper phonebook 
* complete with methods to add new names and look up and remove existing entries
*/
//  return the number associated with the name in the jazbook
function findName(jazbook, name) {
  if (typeof name !== 'string') return false;
  const len = jazbook.length;
  for (let i = 0; i < len; i += 1) {
    if (jazbook[i][0] === name) return jazbook[i][1];
  }
  return false;
}
// return an object literal representing the jazbook
function makePhoneBookObject(jazbook) {
  const goodJaz = {};
  jazbook.forEach((entry, i, array) => {
    goodJaz[entry[0]] = entry[1];
  });
  goodJaz.addNew = (name, number) => {
    if (typeof name !== 'string' || typeof number !== 'string') return false;
    goodJaz[name] = number;
    return goodJaz[name];
  }
  goodJaz.lookup = (name) => {
    if (goodJaz[name]) return goodJaz[name];
    else return false;
  }
  goodJaz.remove = (name) => {
    if (!goodJaz[name]) return false;
    else {
      const temp = goodJaz[name];
      delete goodJaz[name];
      return temp;
    }
  }
  return goodJaz;
}
const objectToExport = {
  findName,
  makePhoneBookObject,
};
module.exports = objectToExport;

// jazbook = [
// ['alex', '301-844-3421'],
// ['jae', '301-844-1211'],
// ['david', '301-844-0978'],
// ['travis', '301-844-8505'],
// ['jasmine', '1800-974-4539'],
// ];

// console.log(findName(jazbook, 'jasmine'));
// newJaz = makePhoneBookObject(jazbook);
// console.log(newJaz);
// newJaz.addNew('max', '707-547-7955');
// console.log(newJaz);
// console.log(newJaz.lookup('travis'));
// newJaz.remove('david');
// console.log(newJaz);
