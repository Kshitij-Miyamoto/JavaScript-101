//Here we discuss the for loop:
/* A for loop is usually used when the nunber of iterations are already known
for loop comes in handy in many situations*/

//basic for loop in action. 
let a = 12;
for( let i = 0 ; i < a ; i++){
    console.log('Hello Console');
}

//Using a for loop to traverse through an array.
let arr = [1, 2, 3, 4, "Kshitij", 6, 7 ,8];
for(let i of arr){
    console.log(i);
}

//Another way of accessing thing through loops
const cats = ["Leopard", "Serval", "Jaguar", "Tiger", "Caracal", "Lion"];

for (const cat of cats) {
  console.log(cat);
}