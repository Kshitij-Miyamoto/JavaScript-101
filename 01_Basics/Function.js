//This is an example of built in function in JS :
const text = "I am Kshitij Sharma";
const text1 = text.replace("Sharma" , "The great");
console.log(text1);

//const myArray = ["I", "love", "chocolate", "frogs"];
const myArray = ["I", "love", "chocolate", "frogs"];
const madeAString = myArray.join(" ");
console.log(madeAString);
// the join() function takes an array, joins
// all the array items together into a single
// string, and returns this new string


const myNumber = Math.random();
console.log(myNumber);

// the random() function generates a random number between
// 0 and up to but not including 1, and returns that number

//function to print the sum
function sum(number1 , number2){
   return(number1 + number2);
}
console.log(sum(12 , 13));

//function to print subscribed message
function message(Username){
    if(Username == undefined){
        console.log("Please Enter a valid username : ");
        
    }else{
    return(`@${Username} just subscribed to our channel`)
}
}
console.log(message("Shamsher"));
//If we don't pass anything then we get undefined


