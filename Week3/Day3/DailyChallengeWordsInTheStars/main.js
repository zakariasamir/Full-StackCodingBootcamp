let userInput = prompt("Enter several words separated by commas:");
let words = userInput.split(",").map(word => word.trim());

let maxLength = Math.max(...words.map(word => word.length));

function printFramedWords(words, maxLength) {
    let border = "*".repeat(maxLength + 4);

    console.log(border);

    words.forEach(word => {
        let spaces = " ".repeat(maxLength - word.length);
        console.log(`* ${word}${spaces} *`);
    });

    console.log(border);
}

printFramedWords(words, maxLength);
