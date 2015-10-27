//https://projecteuler.net/problem=3
//
//The prime factors of 13195 are 5, 7, 13 and 29.
//
//What is the largest prime factor of the number 600851475143 ?

var target = 600851475143;
var primeList = helpers.makePrimeList(65501).reverse();

function largestPrimeFactor(number) {
    for (var idx in primeList) {
        if (number % primeList[idx] === 0) {
            return primeList[idx];
        }
    }
}

// answer
console.log(largestPrimeFactor(target));
