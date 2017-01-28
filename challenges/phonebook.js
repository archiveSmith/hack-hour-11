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

function findName(jazbook, name){
 	for(let i=0; i<jazbook.length; i++){
 		if(jazbook[i][0]=== name){
 			return jazbook[i][1]
 		}
 	}
 	return false;
}

// return an object literal representing the jazbook
function findName(jazbook, name){
 	for(let i=0; i<jazbook.length; i++){
 		console.log('name is: ',jazbook[i][0])
 		if(jazbook[i][0]=== name){
 			return jazbook[i][1]
 		}
 	}
 	return false;
}

function makePhoneBookObject(jazbook){
	let phoneBook = {};
	
	phoneBook.add = (name, number)=>{
		phoneBook[name]=number;
		return phoneBook[name]
	}
	
	phoneBook.lookUp = (name)=>{
		if(phoneBook[name]){
			return('found:', name,phoneBook[name] ) 
		}
		return name + 'was not found'
	}
	
	phoneBook.remove = (name)=>{
		if(phoneBook[name]){
			let response = phoneBook[name]
				delete phoneBook[name];
				return response;
		}
		return name + 'was not found'
	}
	
		jazbook.forEach((jazbookEntry)=>{
		phoneBook[jazbookEntry[0]] = jazbookEntry[1]
	});
	
	return phoneBook
}



const objectToExport = { findName, makePhoneBookObject };

module.exports = objectToExport;