let car = {type : "Ford" , Model : "Fiesta" , cost : 1000000,
features : function(){
    return this.type + " " + this.Model;
}
};
console.log(typeof car); //this will come out as an object
console.log(car) 
console.log(car.cost) // this is how we can access the properties of the car model.
console.log(car["type"])//this is another way of accessing the properties of the car.
console.log(car.features());//this us calling a method from an object. Syntax = ObjectName.MethodName;