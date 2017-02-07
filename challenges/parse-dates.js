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

function parseDates(str) {

  const dateArgs = str.split(' ');

  const currDate = new Date();
  const currYear = currDate.getFullYear();
  const currDay = currDate.getUTCDay();

  if (dateArgs.length < 3 || dateArgs.length > 4) return new Date();

  const DATE_TYPES = {
    'month': 'month',
    'day': 'day'
  }

  let dateType;// = 'day';
  
  const validMonths = {
    'Jan': 'Jan',
    'Feb': 'Feb',
    'Mar': 'Mar',
    'Apr': 'Apr',
    'May': 'May',
    'Jun': 'Jun',
    'Jul': 'Jul',
    'Aug': 'Aug',
    'Sep': 'Sep',
    'Oct': 'Oct',
    'Nov': 'Nov',
    'Dec': 'Dec'
  }

  const validDays = {
    'Monday': 'Monday',
    'Tuesday': 'Tuesday',
    'Wednesday': 'Wednesday',
    'Thursday': 'Thursday',
    'Friday': 'Friday',
    'Saturday': 'Saturday',
    'Sunday': 'Sunday',
    'Today': 'Today'
  }

  const validNumDays = {
    '1st': '1st',
    '2nd': '2nd',
    '3rd': '3rd',
    '4th': '4th',
    '5th': '5th',
    '6th': '6th',
    '7th': '7th',
    '8th': '8th',
    '9th': '9th',
    '10th': '10th',
    '11th': '11th',
    '12th': '12th',
    '13th': '13th',
    '14th': '14th',
    '15th': '15th',
    '16th': '16th',
    '17th': '17th',
    '18th': '18th',
    '19th': '19th',
    '20th': '20th',
    '21st': '21st',
    '22nd': '22nd',
    '23rd': '23rd',
    '24th': '24th',
    '25th': '25th',
    '26th': '26th',
    '27th': '27th',
    '28th': '28th',
    '29th': '29th',
    '30th': '30th',
    '31st': '31st'  
  }

  const meridiem = {
    'AM': 'AM',
    'PM': 'PM'
  }

  if (validMonths[dateArgs[0]]) {
    dateType = DATE_TYPES.month;
  } else if (validDays[dateArgs[0]]) {
    dateType = DATE_TYPES.day;
  } else {
    return new Date();
  }

  if (dateType === DATE_TYPES.month) {
    if (!validNumDays[dateArgs[1]]) return new Date();
    if (!meridiem[dateArgs[3]]) return new Date();
     
    const timeArr = dateArgs[2].split(':');

    return new Date(currYear, dateArgs[0], currDay, timeArr[0], timeArr[1]);
  } else {
    if (!merideum[dateArgs[2]]) return new Date();
    //'Mon Jan 12 2015 01:09:00 
    return new Date();
  }


}

module.exports = parseDates;
