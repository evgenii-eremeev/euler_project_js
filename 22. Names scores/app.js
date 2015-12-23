// Solved with Node

var fs = require('fs');


function score(str) {
  var sum = 0;
  for (var i = 0; i < str.length; i++) {
    sum += str.charCodeAt(i) - 64;
  }
  return sum;
}


fs.readFile("p022_names.txt", "utf8", function(err, data) {
  if (err) throw err;
  var names = data.slice(1, -1).split('","').sort();
  var sumScores = names.reduce(function(sum, name, idx) {
    sum += score(name) * (idx + 1);
    return sum;
  }, 0);
  console.log(sumScores);
});
