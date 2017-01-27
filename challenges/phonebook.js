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
  for (let i = 0; i < jazbook.length; i += 1) {
    if (jazbook[i][0] === name) return jazbook[i][1];
  }
  return false;
}

const j1 = [
  ['alex','301-844-3421'],
  ['jae','301-844-1211'],
  ['david','301-844-0978'],
  ['travis','301-844-8505'],
  ['jasmine','1800-974-4539'],
];

const n1 = 'jae';

// console.log(findName(j1, n1));

// return an object literal representing the jazbook
function makePhoneBookObject(jazbook){
  const temp = {};
  for (let i = 0; i < jazbook.length; i += 1) {
    temp[jazbook[i][0]] = jazbook[i][1];
  }
  return {
    directory : temp,
    find : function(name) {
      return this.directory[name];
    },
    add : function(name, number) {
      this.directory[name] = number;
      return this.directory;
    },
    remove: function(name) {
      delete this.directory[name];
      return this.directory;
    }
  }
}
const pb1 = makePhoneBookObject(j1);
console.log('pb1:', pb1);
console.log('find:', pb1.find('jae'));
console.log('removed:', pb1.remove('alex'));
console.log('added:', pb1.add('joe', '917-858-4988'));

const objectToExport = {
  findName,
  makePhoneBookObject,
};

module.exports = objectToExport;