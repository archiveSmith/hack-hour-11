// Parse dates from questionable date strings.

// Your function will be a called with a string which represents a date and time.
// The provided string will be in one of the formats below. Your function must
// return a Date object with the same month, day of month, hour, and minute
// as in the provided string. The year for the returned date object should be
// the current year.

// Example strings:
// Thursday 12:37 PM
// Nov 19th 1:12 PM
// Mar 1st 6:09 PM
// Monday 5:33 PM
// Friday 7:04 PM
// Today 2:01 PM

// - If the date string starts with a day of week (e.g. Monday) then it's the last occurence
//   that day of the week BEFORE today (e.g. if today is Wednesday and the string
//   'Wednesday 12:37 PM' is passed in, then the date you return should be 7 days ago,
//   the last time Wednesday occurred before today.)
// - If the date string starts with a month (e.g. Nov, Sep) assume that it's for this year.
//   Month abbreviations will always be the first 3 letters of the month name with
//   the first letter capitalized.
// - If a string is passed in which does not conform to any of the rules above, then
//   you should simply return a Date object for the current time.

// Example input, assuming the current Date is Thursday December 17, 2015:
// parseDates('Jan 12th 1:09 AM')  => returns new Date object representing 'Mon Jan 12 2015 01:09:00 GMT-0800 (PST)'
// parseDates('Today 8:15 PM')     => returns new Date object representing 'Thu Dec 17 2015 20:15:00 GMT-0800 (PST)'
// parseDates('Sunday 12:59 PM')   => returns new Date object representing 'Sun Dec 13 2015 12:59:00 GMT-0800 (PST)'

// parseDates('Jan 1st')
// parseDates('hello')
// parseDates('Today 2 PM')        => invalid formats, so all return Date object for today at the current time: 'Thu Dec 17 2015 11:31:00 GMT-0800 (PST)'

// FAQ:
// - seconds / milliseconds of the returned Date object do not matter
// - you can assume the provided day of month will be valid if it's a month string
//   (i.e. the function will not be called with 'Jul 84th 1:00 PM') since that's not a real date
// - if any part of the date string is missing then you can consider it an invalid date


const Months = {'Jan': 'January', 'Feb': 'February', 'Mar': 'March', 'Apr': 'April', 'May': 'May', 
    'Jun': 'June', 'Jul': 'July', 'Aug': 'August', 'Sep': 'September', 'Nov': 'November', 'Dec': 'December'};

const Days = {'Sunday': 0, 'Monday': 1, 'Tuesday': 2, 'Wednesday': 3, 'Thursday': 4, 'Friday': 5, 'Saturday': 6, 'Today': 7};

const Mili = 1000 * 60 * 60 * 24;

function parseDates(str) {
  str = str.split(' ');
  
  if(str[0] in Months){
    return monthMaker(str);
  }else if(str[0] in Days){
    return dayMaker(str);
  }else{
      return new Date().now();
  }


}

function monthMaker(str){  
    let month = Months[str[0]];
    let date = parseInt(str[1]);
    let time = str[2];
    let period = str[3];

    if(!month || !date || !time || !period) return new Date().now();
    
    let d = `${month} ${date}, 2017 ${time}`;
    return new Date(d);
}

function dayMaker(str){
    let d;
    let current = new Date();
    let currentDate = current.getUTCDate();
    let givenDay = Days[str[0]];
    let time = str[1];
    let diff = current.getUTCDay() - givenDay;

    //console.log('givenDay: ', givenDay);
    //console.log('date: ', current);

    if(diff > 0){
      console.log('diff is less than zero', diff);
      d = `${current.getUTCMonth() + 1} ${currentDate - diff}, 2017 ${time}`;
    }else if(diff === 0){
      console.log('diff is equal to zero', diff);
      let date = currentDate - 7;
      
      if(date > 0){
        d = `${current.getUTCMonth() + 1} ${date}, 2017 ${time}`;
      }else{
        diff = 7 - currentDate;
        date = new Date();
        date.setMonth(current.getUTCMonth() - 1);
        date = date.getUTCDate() - diff;
        console.log('date: ', date);
        d 
      }
    }else{
      console.log('diff is more than zero', diff);
    }

    return new Date(d);
}
console.log(parseDates('Jan 12th 1:09 AM'));
console.log(parseDates('Sunday 12:59 PM'));

module.exports = parseDates;
