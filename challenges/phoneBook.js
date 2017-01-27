'use strict';
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
  let file = jazbook.find((record) => {
    return record[0] === name;
  });

  return file ? file[1] : false;
}

// return an object literal representing the jazbook
function makePhoneBookObject(jazbook){
  class PhoneBook{
    constructor(phonebook){
      this.records = {};
      phonebook.forEach((record) =>{
        this.records[record[0]] = record[1];
      });
    }

    addRecord(name, number){
      this.records[name] = number;
      return this.records[name];
    }

    removeRecord(name){
      let record = this.records[name];
      delete this.records[name];
      return record;
    }
  }
  return new PhoneBook(jazbook);
}
// 
// let jazbook = [
//      ['alex','301-844-3421'],
//      ['jae','301-844-1211'],
//      ['david','301-844-0978'],
//      ['travis','301-844-8505'],
//      ['jasmine','1800-974-4539'],
//  ];
//
// let pb = makePhoneBookObject(jazbook);
// console.log(pb.removeRecord('david'));
// console.log(pb.addRecord('joseph', '78'));
// console.log(pb);

const objectToExport = {
  findName,
  makePhoneBookObject,
};

module.exports = objectToExport;
