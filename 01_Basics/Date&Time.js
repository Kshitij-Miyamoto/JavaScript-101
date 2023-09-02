/* Date and time basically gives us a sense of date and time in the code 
Date and time comes in handy when we are designing things like Websites where
we need to take reservations, ie. Restraunt Websites, Cinema Hall Websites.
*/

let newdate = new Date("07-07-2023");
console.log(newdate.toDateString());
console.log(newdate.getTime());
console.log(newdate.toISOString());
console.log(newdate.toJSON());
console.log(newdate.toLocaleDateString());

//So basically these are various formats in which the dates can be written.

let myTimeStamp = Date.now()
/*In JavaScript, Date.now() is a built-in function that returns the current timestamp in milliseconds
 since the Unix epoch (January 1, 1970, 00:00:00 UTC). This timestamp represents a point in time and is
  often used for various purposes, such as measuring time intervals,
 recording when an event occurred, or generating unique identifiers.*/
 console.log(myTimeStamp);
console.log(myTimeStamp.toExponential());
console.log(myTimeStamp.toFixed());
console.log(myTimeStamp.toLocaleString());

let myDate = new Date()
// normal output
console.log(myDate);
//this fetches the date
console.log(myDate.getDate());
//this fetches you the year
console.log(myDate.getFullYear());
//this is in seconds
console.log(Math.floor(myDate.getTime()/1000));
//this fetches the months
console.log(myDate.getMonth()+1);
//this is how we write in industry standards however this took more space
const currentDate = new Date();
const currentMonth = currentDate.getMonth() + 1;
console.log(`Current month: ${currentMonth}`);









