function processText() {
    const inputText = document.getElementById('input').value;
    let outputText = '';

    // Count words, characters, and lines
    const wordCount = inputText.split(/\s+/).filter(word => word !== '').length;
    const charCount = inputText.length;
    const lineCount = inputText.split(/\r\n|\r|\n/).filter(line => line !== '').length;

    outputText += `Word Count: ${wordCount}\n`;
    outputText += `Character Count: ${charCount}\n`;
    outputText += `Line Count: ${lineCount}\n\n`;

    // Search and replace text
    const searchText = 'example';
    const replaceText = 'replacement';
    const replacedText = inputText.replace(new RegExp(searchText, 'g'), replaceText);
    outputText += `Text after search and replace:\n${replacedText}\n\n`;

    // Remove special characters and formatting
    const cleanedText = inputText.replace(/[^\w\s]/gi, '');
    outputText += `Text after removing special characters and formatting:\n${cleanedText}\n\n`;

    // Convert text to lowercase and uppercase
    const lowercaseText = inputText.toLowerCase();
    const uppercaseText = inputText.toUpperCase();
    outputText += `Text in lowercase:\n${lowercaseText}\n\n`;
    outputText += `Text in uppercase:\n${uppercaseText}`;

    document.getElementById('output').value = outputText;
}
