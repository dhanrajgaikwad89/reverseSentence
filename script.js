const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// to get user input
rl.question("Please enter a sentence: ", function(userInput) {
    
    if (userInput.trim() !== "") {
        // Call the function to reverse words in the sentence
        const reversedSentence = reverseWordsInSentence(userInput);
        console.log("Reversed sentence:", reversedSentence);
    } else {
        console.log("No input provided. Please enter a sentence.");
    }

    
    rl.close();
});

// Function to reverse words in a sentence
function reverseWordsInSentence(sentence) {
    const words = sentence.split(" ");
    const reversedWords = words.map(word => {
        return word.split("").reverse().join("");
    });
    return reversedWords.join(" ");
}

