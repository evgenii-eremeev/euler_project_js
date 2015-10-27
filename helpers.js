/**
 * Created by jay on 27.10.15.
 */
var helpers = {};

helpers.makePrimeList = function(limit) {
    var sieve = [];
    for (var i = 0; i < limit; i++) {
        sieve.push(1);
    }
    var primeList = [];
    var currPrime = 2;

    while (currPrime < limit) {
        if (sieve[currPrime] === 1) {
            primeList.push(currPrime);
            for (var idx = currPrime; idx < limit; idx += currPrime) {
                sieve[idx] = 0;
            }
        }
        currPrime += 1;
    }
    return primeList;
};