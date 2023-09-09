//Combination of strings and substrings
function substrings(str) {
    //here we are storing the result into an array
    const result = [];
    
    function search_combination(start, curr) {
      if (curr.length > 0) {
        result.push(curr);/*
        If the length is greater than 0,
         we push it towards the empty array
         */
      }
      for (let i = start; i < str.length; i++) {
        search_combination(i + 1, curr + str[i]);
      }
    }  
    search_combination(0, '');
    return result;
  }
  const str = 'dog';
  const result = substrings(str);
  console.log(result);