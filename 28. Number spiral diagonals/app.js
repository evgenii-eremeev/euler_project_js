function sumSpiralDiag(width) {
  var sum = 1,
      cur = 1;
  for (var i = 2; i < width; i += 2) {
    for (var j = 0; j < 4; j++) {
      cur += i;
      sum += cur;
    }
  }
  return sum;
}

console.log(sumSpiralDiag(1001));
