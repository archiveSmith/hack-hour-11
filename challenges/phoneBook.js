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
  let i = 0;
  const len = jazbook.length;

  for (i; i < len; i += 1) {
    if (jazbook[i][0] === name) {
      return jazbook[i][1];
    }
  }

  return undefined;
}
// return an object literal representing the jazbook
function makePhoneBookObject(jazbook){
  let i = 0;
  const len = jazbook.length;

  bookObj = { 
    persons: {},

    addPerson: function(name, number) {
      this.persons[name] = number;
      return number;
    },

    lookupPerson: function(name) {
      if (this.persons.hasOwnProperty(name)) {
        return this.persons[name];
      }
      return undefined;
    },

    removePerson: function(name) {
      const removedNum = this.persons[name];
      delete this.person[name];

      return removedNum;
    }
  };

  for (i; i < len; i += 1) {
    let name = jazbook[i][0];
    let number = jazbook[i][1];

    bookObj[persons][name] = number;
  }



  return bookObj;
}
const objectToExport = {
  findName,
  makePhoneBookObject,
};
module.exports = objectToExport;