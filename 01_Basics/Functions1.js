function calcSum(val1){
    return val1
}
console.log(calcSum(100));

function calcSum1(...val1){
    //here we just used spread ... operator to spread the arguments passed inside the array
    return val1
}
console.log(calcSum1(100, 200, 300, 400, 5000));

//Passing objects in a function using 2 ways : 
 const obj = {
    name : "Kshitij Sharma",
    Age : "20",
    Position : "Intern at Amex"
}
//Now declaring an object
function Bio(obj){
    console.log(`${obj.name} is ${obj.Age} years Old and currenly is an ${obj.Position}`);
}
//this is a classic example of passing an object inside a function
Bio(obj);
//another way of directly passing an object inside the function
Bio({
    name : "Kshitij Sharma",
    Age : 20,
    Position : "Intern at Amex"
})

// Default paramters
function hello(name = "Kshitij"){
    console.log(`Hi ${name}, nice to meet you`);
}
hello(); //example of default parmater
hello("Salu");//If we put in new paramters the initial once get overruled.
    


