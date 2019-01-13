function round(number, precision = 2) {
  return +number.toPrecision(precision + 1);
}

function mean(arr, precision = 2) {
  return round(arr.reduce((acc, val) => acc + val) / arr.length, precision);
}

module.exports = mean;
