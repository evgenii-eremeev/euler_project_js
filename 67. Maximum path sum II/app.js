var fs = require('fs');

var file = fs.readFile("triangle.txt", "utf8", function(err, data) {
  if (err) {
    console.error(err);
  }

  var triangle = parseTriangle(data);
  console.log(sumMaxPath(triangle));

});

function parseTriangle(rawData) {
  var rows = rawData.split("\n").slice(0, -1);
  rows = rows.map(function(row) {
    var nums = row.split(" ");
    nums = nums.map(function(num) {
      return +num;
    });
    return nums;
  });
  return rows;
}

function sumMaxPath(data) {
  if (data.length === 1) {
    return data[0][0];
  }

  var last = data.slice(-1)[0];
  var curr = data.slice(-2, -1)[0];
  var newLast = curr.map(function(num, idx) {
    return num + Math.max(last[idx], last[idx + 1]);
  });
  var newData = data.slice(0, -2);
  newData.push(newLast);
  return sumMaxPath(newData);
}
