function isPrime(number) {
    if (number <= 1) return false; 
    for (let i = 2, sqrt = Math.sqrt(number); i <= sqrt; i++) {
        if (number % i == 0) {
            return false;
        }
    }
    return true;
}

console.log(isPrime(9));  
