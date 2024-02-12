/**
 * This function filters an array based on a given condition.
 * @param {Array} arr - The input array to be filtered.
 * @param {Function} condition - The condition function used for filtering.
 * @returns {Array} - The filtered array.
 */
function filterArray(arr, condition) {
    // Initialize an empty array to store the filtered elements
    const filteredArray = [];

    // Loop through each element in the input array
    for (let i = 0; i < arr.length; i++) {
        // Check if the current element satisfies the condition
        if (condition(arr[i])) {
            // If the condition is true, add the element to the filtered array
            filteredArray.push(arr[i]);
        }
    }

    // Return the filtered array
    return filteredArray;
}

// Example usage:

// Define an array of numbers
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Filter even numbers from the array
const evenNumbers = filterArray(numbers, function(num) {
    return num % 2 === 0;
});
console.log("Even numbers:", evenNumbers);

// Filter odd numbers from the array
const oddNumbers = filterArray(numbers, function(num) {
    return num % 2 !== 0;
});
console.log("Odd numbers:", oddNumbers);
