function findLongestWord(text) {
    const words = text.split(` `);
    let left = 0;
    let longestWord = ` `;

    while (left < words.length) {
        const currentWord = words[left];
        // comparar longitud
        if (currentWord.length > longestWord.length) {
            longestWord = currentWord; 
        }

        left++;
    }

    return longestWord;
}

// ejemplo
const text = "JavaScript es un lenguaje de programación increíble para aprender.";
console.log(findLongestWord(text)); // Resultado: "programación"