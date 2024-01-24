function countVowels(name) {
  // Convert the name to lowercase to make the comparison case-insensitive
  const lowercaseName = name.toLowerCase();

  // Define an array of vowels
  const vowels = ['a', 'e', 'i', 'o', 'u'];

  // Initialize a counter for the number of vowels
  let vowelCount = 0;

  // Iterate through each character in the name
  for (let i = 0; i < lowercaseName.length; i++) {
    // Check if the current character is a vowel
    if (vowels.includes(lowercaseName[i])) {
      // Increment the vowel count if it is a vowel
      vowelCount++;
    }
  }

  // Return the final count of vowels
  return vowelCount;
}
