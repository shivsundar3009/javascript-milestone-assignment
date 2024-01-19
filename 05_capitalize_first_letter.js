function capitalizeFirstName(name) {
  // Check if the first letter is lowercase using the ternary operator
  const modifiedName = name[0].toLowerCase() === name[0] ? name.charAt(0).toUpperCase() + name.slice(1)
    : name;

  return modifiedName;
}

// Example usage:
const userInput = "john";
const modifiedUserInput = capitalizeFirstName(userInput);
console.log(modifiedUserInput);
