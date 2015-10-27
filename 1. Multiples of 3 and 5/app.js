//https://projecteuler.net/problem=1
//If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.
//
//Find the sum of all the multiples of 3 or 5 below 1000.

function sumMultiplesOf3and5(limit) {
    var numbers = [];
    for (var num = 1; num < limit; num++) {
        if (num % 3 === 0) {
            numbers.push(num);
        } else if (num % 5 === 0) {
            numbers.push(num);
        }
    }
    return numbers.reduce(function(a, b) {return a + b});
}

// answer
console.log(sumMultiplesOf3and5(1000));