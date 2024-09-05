function isPalindrome(word: string): boolean {
    const cleanedWord = word.toLowerCase().replace(/[^a-z0-9]/g, '');

    const reversedWord = cleanedWord.split('').reverse().join('');

    return cleanedWord === reversedWord;
}

// Ejemplo de uso:
const inputWord = "Reconocer";
if (isPalindrome(inputWord)) {
    console.log(`${inputWord} es un palíndromo.`);
} else {
    console.log(`${inputWord} no es un palíndromo.`);
}
