function invertedRightAngleTriangle(i) {
    for (let row = i; row > 0; row--) {
        let spaces = i - row;
        let asterisks = row;
        
        // Print spaces
        for (let j = 0; j < spaces; j++) {
            process.stdout.write(" ");
        }
        
        // Print asterisks
        for (let k = 0; k < asterisks; k++) {
            process.stdout.write("*");
        }
        
        // Move to the next line
        console.log();
    }
}

// Example with i=6
let i = 6;
invertedRightAngleTriangle(i);
