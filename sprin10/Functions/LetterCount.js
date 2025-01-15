function letterCount(sir, litera) {
    let count = 0;
    for (let char of sir.toLowerCase()) {
      if (char === litera.toLowerCase()) {
        count++;
      }
    }
    return count;
  }
  
  // Export the function
  module.exports = letterCount;
  
  // Example usage
  console.log(letterCount("Îmi place programarea", "a"));  // Output: 4
  console.log(letterCount("Vreau să lucrez în IT", "r"));  // Output: 2
  