//this is an example of named function 
function square(x){
    return x*x ;
}
console.log(square(3));

/*Now for the anonymous function 
if we look carefully this doesn't have a name, 
it is stored in a variable*/
const asquare = function(x = 5){
    return x*x;
}
console.log(typeof asquare);
console.log(asquare());

/*This is an example of arrow function,
Shorthand of anonymous function*/
const sq = (x) => x*x;
console.log(sq(12));

const sq1 = (x) =>{
    /*rather than entering the variale we write x as 
    the input value*/
    console.log(`Input value = ${x}`);
    return x*x ; 
}
 console.log(sq1(5));
 
 //Again making an anonymus function
 const getfullname = function(firstName , Lastname){
    console.log(`The name is ${Lastname}, ${firstName} ${Lastname}`);
 }
 console.log(getfullname("Kshitij", "Sharma "));

 
 const getName = (FirstName = "Kshitij" , LastName = "Sharma") =>{
    console.log(`The name is ${FirstName} ${LastName}`);
 }
 console.log(getName());
 
/* Immediately invoked function is a type of function 
where the function is not at all stored in any variable rather 
it is invoked the moment it is made, executed right then adn there
1. The function is made to contain in braces, the function is nameless.
2. After that we pass any value of our choice and also contain it in braces.
*/
(function (x){
    console.log(x * x);
})(2)




