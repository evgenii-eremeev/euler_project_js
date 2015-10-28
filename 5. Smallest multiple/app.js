/*
Smallest multiple
https://projecteuler.net/problem=5
2520 is the smallest number that can be divided by each of the numbers from 1 to 10 without any remainder.
What is the smallest positive number that is evenly divisible by all of the numbers from 1 to 20?
*/

function smallestMultiple(limit) {
    var factors = [];
    for (var num = 2; num <= limit; num++) {
        var copyFactors = factors.slice(0);
        var currFactors = helpers.primeFactors(num);
        for (var idx = 0, len = currFactors.length; idx < len; idx++) {
            var idxOfCurrFactor = copyFactors.indexOf(currFactors[idx]);
            if (idxOfCurrFactor === -1) {
                factors.push(currFactors[idx]);
            } else {
                delete copyFactors[idxOfCurrFactor];
            }
        }
    }
    return factors.reduce(function (a, b) { return a * b; });
}

console.log(smallestMultiple(20));
