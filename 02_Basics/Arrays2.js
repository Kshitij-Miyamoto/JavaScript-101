const marvel = ["kshitij" , "Sharma" , "Salu" , "Shamsher"];
const Dc = ["Bismil" , "Ram" , "Rahim"];
//marvel.push(Dc);
console.log(marvel);//the problem we get here is that we get an array inside an array.
console.log(marvel[4]);//this is returning us an array
//console.log(marvel[4][1]);//this will return the element of the second array 

/* This .push() statement will modify the the original arrays rather than creating 
new arrays */

/* Hence to tackle this problemn we will use .concat rather than .push, as .push modifies 
our array whereas the .concat gives out a new array */
const newarr = marvel.concat(Dc);
console.log(newarr);
// here both get merged, and the concat function is working on an new array.

//To check whether the thing we are dealing with is an array or not.
console.log(Array.isArray("Hitesh"));

//This Array.from will convert "Hitesh" into an array if it isn't.
console.log(Array.from("Hitesh"));








