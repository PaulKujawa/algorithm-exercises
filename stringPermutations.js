// algorithm from https://stackoverflow.com/a/39928535

function* permute(arr, n = arr.length) {
  if (n <= 1) {
    yield arr.slice();
  } else {
    for (let i = 0; i < n; i++) {
      yield* permute(arr, n - 1);
      const j = n % 2 ? 0 : i;
      [arr[n - 1], arr[j]] = [arr[j], arr[n - 1]];
    }
  }
}

const iterator = permute([..."xyz"]);
const response = Array.from(iterator).map(perm => perm.join(""));
