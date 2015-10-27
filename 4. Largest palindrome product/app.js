/*
https://projecteuler.net/problem=4
A palindromic number reads the same both ways. The largest palindrome made from the product of two 2-digit numbers is 9009 = 91 × 99.
Find the largest palindrome made from the product of two 3-digit numbers.
*/

function isPalindrom(number) {
    number = number.toString();
    if (number.length <= 1) {
        return true;
    }
    if (number[0] === number.slice(-1)) {
        return isPalindrom(number.slice(1, -1));
    } else {
        return false;
    }
}

function largestPal(start, stop) {
    var product, palList;
    palList = [];
    for (var i = start; i < stop; i++) for (var j = start; j < stop; j++) {
        product = i * j;
        if (isPalindrom(product)) {
            palList.push(product);
        }
    }
    return Math.max.apply(null, palList);
}

// answer
console.log(largestPal(100, 1000));