function splitLines(str) {
    // Use the split() method to split the string into an array of lines based on the newline character
    const lines = str.split(/\r?\n/);
    return lines;
}

// Example usage:
const text = "Line 1\nLine 2\nLine 3";
const linesArray = splitLines(text);
console.log("Array of lines:", linesArray);
