//Now we will learn various type of datatupes present in JS :
/*
these are of the following types ; 
1. BigInt
2. Boolean 
3. Arrays
4. String
5. Undefined
6. Null
7. Symbol
8. Object
*/

//this is basic syntax to define an array :
let arr = [1, 2 ,3, 4, 5, 6, 7];
console.log(arr);

//this is the basic syntax of an object : 
//Demo of object datatype
let obj = {
    firstName : "Salu",
    lastName : "Shamsher",
    RollNo : "005",
    Residence : "Vikaspuri"
};
console.log(obj);

//Adding 2 differnt datatypes
let a = 16 + "Volvo";
console.log(a);
/* Here the first operand is number hence all 
the elements are treated as number
Output = 16Volvo
 */ 
let b = "Volvo" + 16 + 4 ; 
console.log(b);
/* Here the first operand is string hence all 
the elements are treated as string
Output = Volvo164
 */ 

// Dynamic datatype concept in JS //
let x;
 x = 12; //This value of x will be rejected
 x = "Salu"; /* This value of x will be selected and will
 be the output of the program */
console.log(x);



