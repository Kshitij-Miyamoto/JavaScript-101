//Here we understand Strings
let text = "Kshitij Sharma";
/* Various Methods
for Strings and inside Strings */
let length = text.length;
console.log(length);
console.log(text);
let text1 = 'The \"Great\" Comeback'; // here we inserted " " , in strings using \".
let length1 = text.length;
//Length of the string
console.log(length1);
console.log(text1)
//Slicing of the string
let part = text.slice(0,12);
console.log(part);
//Substring of the string
let part1 = text.substring(0,8);
//Substr of the string
let part2 = text.substr(0 , 14);
// Replacing the content
let newtext = text.replace("Sharma" , "Warrior");
console.log(newtext);
//Uppercase
let upcase = text.toUpperCase();//Never ever forget the curly braces as they make a function a function
console.log(upcase);
//Lowercase
let lowcase = text.toLowerCase();//Never ever forget the curly braces as they make a function a function
console.log(lowcase);
//concatenation 
let newstring = text.concat(" and " , text1);
console.log(newstring);

/*
SEARCHING TECHNIQUES 

String indexOf()
String lastIndexOf()
String search()
String match()
String matchAll()
String includes()
String startsWith()
String endsWith()
*/

let index = text1.indexOf("The");




