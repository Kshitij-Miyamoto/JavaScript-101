const person = {
    name : ["Kshitij Sharma", "Salu Shamsher"],
    age  : 20,
    year : "3rd year",
    bio(){ `This is ${this.name[0]}, He is currently in ${this.year} and pursuing his internship in london `},
    Companies : { SecondYear : "American Express", ThirdYear : "Mercari Japan"
     , FourthYear : "Bloomberg London"
}

};

//Accessing elements in {.} form : 
console.log(person.name);
console.log(person.name[0]);

//Accessing elements in [] form : 
console.log(person["age"]);

//Acessing functions inside the object :
const personBio = person.bio();
console.log(personBio);

//Object as a property in an Object : 
console.log(person.Companies);
console.log(person.Companies.SecondYear);
console.log(person.Companies.ThirdYear);
console.log(person.Companies.FourthYear);

//retrieving the value of members 
person.name[1] = "Sakshi Sharma";
console.log(person.name);

//Making an object through "new" keyword 
let myResume = new Object();
//An Object is Born
console.log(myResume);

//Here we are filling the object with the help of[.] notation
myResume.name = "Kshitij Sharma";
myResume.age = "20";
myResume.Skills = "Full Stack Engineer";
myResume.Niche = "Creative Technologist";
myResume.greet = function(){
    console.log( "Hi I am currently working in Bloomberg UK");
   } 
   console.log(myResume);

//Creating Object through Instructor method .
function Condense (
    //First we Devise a new function
    Age ,
    Skills ,
    Interests,
){
    //We then fill up various properties into the function.
    this.Age = Age,
    this.Skills = Skills,
    this.Interests = Interests
}
//We then initialize a new object.
let js = new Condense( 20 , "Full Stack" , "Sports, Rock Music");
console.log(js);

//deletingn object elements
delete person.age;

//method-1 --- Object.values
console.log(Object.values(js));

//method-2 --- Object.keys
console.log(Object.keys(js));

//method-3 --- Object.freeze
console.log(Object.freeze(js));
js.Age = 21; //Our Object cannot be changed now
console.log(js);

//Iterating keys in an objects using for in
for(let key in js){
    console.log( js[key]);
}
    













