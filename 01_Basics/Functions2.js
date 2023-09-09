//Argument keyword

function sum(){
    console.log(arguments);

    //we made this loop to print the input 
    for(let i = 0 ; i < arguments.length ; i++){
        console.log(arguments[i]);
        
    }
    //here we initialize a variable to store the values to print the sum
    let sum1 = 0 ;
    //Again we run a loop to iterate through the various inputs given
    for(let i = 0 ; i < arguments.length ; i++){
        sum1 = sum1 + arguments[i];
    }
    //Finally printing the sum
    console.log(`The sum is ${sum1}`)
}
//Entering the arguments
sum(1, 2, 3, 4, 5);