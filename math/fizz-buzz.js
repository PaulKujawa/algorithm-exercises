// O(1)

function evenlyDividable(number, dividor) {
  return number % dividor === 0;
}

function map(i) {
  if (evenlyDividable(i, 6)) {
    return "Fizz Buzz";
  }

  if (evenlyDividable(i, 2)) {
    return "Fizz";
  }

  if (evenlyDividable(i, 3)) {
    return "Buzz";
  }

  return i;
}

// O(N)
function fizzBuzz(n) {
  const terms = [];
  for (let i = 1; i <= n; i++) {
    terms.push(map(i));
  }

  return terms;
}

module.exports = fizzBuzz;
