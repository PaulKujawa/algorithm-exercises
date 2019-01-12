// O(N)
function arrayChunks(arr, size) {
  if (arr.length <= size) {
    return arr;
  }

  const reducer = (chunks, element, i) => {
    if (i % size === 0) {
      chunks.push([]);
    };

    chunks[chunks.length - 1].push(element);

    return chunks;
  };

  return arr.reduce(reducer, []);
}

// O(N)
function arrayChunksSlice(arr, size) {
  if (arr.length <= size) {
    return arr;
  }
  
  const chunks = [];

  for (let i = 0; i < arr.length; i += size) {
    chunks.push(arr.slice(i, i + size));
  }

  return chunks;
}

module.exports = {
  arrayChunks,
  arrayChunksSlice
};
