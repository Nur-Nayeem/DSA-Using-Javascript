// // fibonacci number 
const fibonacci = (n) => {
    let fibo = [0, 1]
    for (let i = 2; i < n; i++) {
        fibo[i] = fibo[i - 1] + fibo[i - 2]
    }
    return fibo;
}

// console.log(fibonacci(7))

// // factorial 
const factorial = (n) => {
    let fact = n;
    for (i = n - 1; i >= 1; i--) {
        fact *= i;
    }
    return fact;
}
// console.log(factorial(5))

// prime number 
const isPrime = (n) => {
    if (n < 2) {
        return false;
    }
    for (let i = 2; i <= Math.sqrt(n); i++) { //O(sqrt(n)) time
        if (n % i === 0) {
            return false;
        }
    }
    return true
}

// console.log(isPrime(12))
// console.log(Math.floor(11 / 2))

// power of two   2^0, 2^1, 2^2.....

const isPowerOfTwo = (n) => {
    if (n < 1) {
        return false;
    }
    while (n > 1) {
        if (n % 2 !== 0) {
            return false
        }
        n = n / 2;  //O(logn) time
    }
    return true;
}

const isPowerOfTwoBitWise = (n) => {
    if (n < 1) {
        return false;
    }
    return (n & (n - 1)) === 0         // ( (8)1000 & (7)0100 ) = 0
}

// console.log(isPowerOfTwo(128)) 
// console.log(isPowerOfTwoBitWise(128)) 


// recurson 

// fibonacci using recurson 
const fibonacciRecurson = (n) => {
    if (n < 2) {
        return n;
    }
    return fibonacciRecurson(n - 1) + fibonacciRecurson(n - 2)

}

//time complexity of recursive fibonacci O(2^n)
// console.log(fibonacciRecurson(6));


// factorial using recurson 
const factorialRecurson = (n) => {
    if (n === 0) {
        return 1;
    }
    return n * factorialRecurson(n - 1);

}
//time complexity O(n)
// console.log(factorialRecurson(5))
