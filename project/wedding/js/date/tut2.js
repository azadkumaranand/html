let date = new Date();

//set date accordint to your need

console.log(date);
//setFullYear(year, month, day) method is used to set desired year to date
date.setFullYear(2000, 11, 5);

console.log(date);

//setDate(date) set the day as a number (range: 1 to 31);

date.setDate(23);

console.log(date);

//setHours(date) set the day as a number (range: 0 to 23);

date.setHours(21);

console.log(date);

//setMinutes(minutes) set the day as a number (range: 0 to 59);

date.setMinutes(25);

console.log(date);

//setSeconds(minutes) set the day as a number (range: 0 to 59);

date.setSeconds(6);

console.log(date);

//setMilliseconds(minutes) set the day as a number (range: 0 to 999);

date.setMilliseconds(8);

console.log(date);
console.log(date.getMilliseconds());