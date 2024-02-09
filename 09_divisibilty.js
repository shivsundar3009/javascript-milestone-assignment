function printNumbersDivisibleBy3NotBy2(numbers) {
  for (let i = 0; i < numbers.length; i++) {
    const currentNumber = numbers[i];
    
    // Check if the number is divisible by 2, if so, skip to the next iteration
    if (currentNumber % 2 === 0) {
      continue;
    }
    
    // Check if the number is divisible by 3, if so, print it
    if (currentNumber % 3 === 0) {
      console.log(currentNumber);
    }
  }
}

// Example usage:
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
printNumbersDivisibleBy3NotBy2(numbers);
