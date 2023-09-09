
function isPrime(n) {
    if (n <= 1) return false; // 0 and 1 are not prime
    if (n <= 3) return true;  // 2 and 3 are prime
  
    // Check for divisibility by numbers from 2 to the square root of n
    for (let i = 2; i <= Math.sqrt(n); i++) {
      if (n % i === 0) {
        return false; // n is divisible by i, so it's not prime
      }
    }
  
    return true; // If no divisors found, n is prime
  }
  
  console.log(isPrime(17)); // true
  console.log(isPrime(4));
  console.log(isPrime(1))  // false
  