function reverse(number){
    let stringnumber = number.toString();
    let reversedString  = stringnumber.split('').reverse('').join('');
    let reverseNumber = parseInt(reversedString, 10)

    return reverseNumber ; 
}
let ognumber = 12345
console.log(`The original number is ${ognumber}`);

console.log(reverse(ognumber));

