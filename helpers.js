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

helpers.primeFactors = function(num) {
    var primes = this.makePrimeList(num + 1);
    var temp = num;
    var factors = [];
    while (temp > 1) {
        for (var i = 0, len = primes.length; i < len; i++) {
            if (temp % primes[i] === 0) {
                factors.push(primes[i]);
                temp /= primes[i];
            }
        }
    }
    return factors;
};
