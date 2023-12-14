function capitalizeStrings(templateString) {
  // Use the spread operator to split the string into an array of words
  const words = [...templateString.split(" ")];

  // Capitalize the first letter of each word
  const capitalizedWords = words.map((word) => {
    return word.charAt(0).toUpperCase() + word.slice(1);
  });

  // Join the words back into a string and return the result
  const capitalizedString = capitalizedWords.join(" ");
  return capitalizedString;
}

// Example usage:
const originalString = "hello world ";
const result = capitalizeStrings(originalString);
console.log(originalString);
console.log(result); // Output: "Hello World "
// Original string is not modified: "hello world "
