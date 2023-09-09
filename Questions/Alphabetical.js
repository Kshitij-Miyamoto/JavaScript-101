//Arranging a string in alphabetical order 

function AlphabeticalOrder(str){
   return str.split("").sort().join("")
}
let string = "shitijharma"
console.log(AlphabeticalOrder(string));
