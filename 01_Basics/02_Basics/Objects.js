
const mySym = Symbol("key1") //Defining a symbol

const Demo_Objct = {
    name : "Kshitij Sharma" ,
    [mySym]: "mykey1", //here we have created a symbol
    Age : 20,
    Skills : "Infinity",
    Package : "120k Dollars",
    Location : "London, UK"
}
console.log(Demo_Objct);

//Acsessing elements in an object
console.log(Demo_Objct["Age"]);

/*Another way to access elements,
however this isn't really 
used */
console.log(Demo_Objct.Age);
console.log(Demo_Objct["mySym"]);

Demo_Objct.Location = "Denver, Colorado"
console.log(Demo_Objct);

Object.freeze(Demo_Objct); //Due to this "Location" won't change
Demo_Objct.Location = "Greater London Area"
console.log(Demo_Objct);




