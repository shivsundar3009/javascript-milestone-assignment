// Sample array of marks
let marks = [78, 92, 85, 88, 95];

// Initialize a variable to store the highest marks
let highestMarks = marks[0];

// Iterate through the array to find the highest marks using the ternary operator
for (let i = 1; i < marks.length; i++) {
    highestMarks = marks[i] > highestMarks ? marks[i] : highestMarks;
}

// Display the highest marks to the teacher
console.log("The highest marks scored by a student is: " + highestMarks);
