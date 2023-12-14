function filterUniqueValues(...arrays) {
  // Concatenate all arrays into a single array
  const mergedArray = [].concat(...arrays);

  // Use Set to keep only unique values
  const uniqueValues = [...new Set(mergedArray)];

  return uniqueValues;
}

// Example usage:
const inputArrays = [
  [1, 2, 3],
  [3, 2, 4],
  [4, 3, 1],
];
const result = filterUniqueValues(...inputArrays);
console.log(result); // Output: [1, 2, 3, 4]
