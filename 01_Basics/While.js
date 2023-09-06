/* initializer
while (condition) {
  // code to run

  final-expression
}

this is a classic example of a while loop
*/

let a = 0;
while ( a < 5){
    console.log('Hi, I am Kshitij');

    a++
}

//Accessing elements of an array through while loop
let arr = ["cat", "bat", "sat", "rat"];
let i = 0;
while( i < arr.length){
    console.log(arr[i]);
    i++;
}


/*
initializer
do {
  // code to run

  final-expression
} while (condition)

This will atleast be implemeted once , condition comming after increment/decrement is 
kind of a metaphor
*/


//This will be executed atleast once.
let b = 0;
do{
    console.log('Hi there, have a good day');
    b++
    
}while( a >10)
