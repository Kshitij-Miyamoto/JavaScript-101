function palindrome(str){
    let len = str.length;
    for( let i = 0 ; i < len/2 ; i++){
        if(str[i] !== str[len-1-i])
        return `false, Please enter a palindrome` ;

    }
    return `true, the given string is a palindrome`; 
}
let pd = "naman"
console.log(palindrome(pd));
console.log(palindrome("Kshitij"));

    