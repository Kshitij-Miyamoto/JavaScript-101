/* Number and Math{global object in JS}, so basically we know that number is a type in Js, 
However math is a global object which helps to perform various operations in the program
some of them are Math.Random, Math.floor, Math.round, Math.ceil, Math.abs.
*/
let max = 6;
let min = 1;
//In this case for a dice game we are taking values between 1 and 6
console.log(Math.floor(Math.random()*(max-min+1) + min));
//here (max - min + 1) is actually the range of the numbers.
//We do + min
console.log(Math.random());

//If we just want a postive output
let num = -12;
console.log(Math.abs(num));

//If we want rounding of the decimal
let dec = 12.456;
console.log(Math.round(dec));

