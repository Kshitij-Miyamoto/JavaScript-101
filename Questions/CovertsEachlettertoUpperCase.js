function Uppercase(str){
    let arr = str.split(' ')
   let newarr1 = [];
    for( let i = 0 ; i < arr.length ; i++){
    newarr1.push(arr[i].charAt(0).toUpperCase() + arr[i].slice(1));
    }
    return newarr1.join(' ') ; 
}
console.log(Uppercase("kshitij sharma"));
/*We made a minor mistake here we wwrote split('') rather than split(' '), due to which 
the whole string was getting encapsulated rather than any single word
Another mistake was when using join('') we had to use join(' ') so as to keep spaces between 
the word */