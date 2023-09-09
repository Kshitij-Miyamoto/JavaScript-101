//Here we will count the vowels in a string 
function vowels(str){
    count = 0;
  arr = str.toLowerCase()
  /*
  first we convert the whole string into lowercase
  then we convert it into an array
  */

  for(let i = 0 ; i < arr.length ; i++){
    if( arr[i] === 'a' || arr[i] === 'e' || arr[i] === 'i' || arr[i] === 'o' || arr[i] ==='u'){
        count = count + 1;
        console.log(arr[i]);
        
    }
  }
return count ; 
}
console.log(vowels("Kshitij"));
