function getRandom(start, end) {
    return Math.floor(Math.random() * (end - start)) + start;
  }
  
  // Export the function
  module.exports = getRandom;
  
  // Example usage
  console.log(getRandom(3, 5));  // Output: Random number between 3 and 5 (e.g., 3 or 4)
  