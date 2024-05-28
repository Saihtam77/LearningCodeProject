const wordCount = (prompt) => {
  let input = prompt("Entrez une phrase :");
  let count = 1;
  for (let i = 0; i < input.length; i++) {
    if (input[i] === " ") {
      count++;
    }
  }
  return console.log("Il y a " + count + " mots dans cette phrase.");
};

const ReverseWord = (prompt) => {
  let input = prompt("Entrez un mot :");
  let reversed = "";
  for (let i = input.length - 1; i >= 0; i--) {
    reversed += input[i];
  }
  return console.log("Le mot inversé est : " + reversed);
};

const replaceWord = (prompt) => {
  let input = prompt("Entrez une phrase :");
  let word = prompt("Entrez le mot à remplacer :");
  if (input.indexOf(word) === -1) {
    console.log("Le mot n'est pas dans la phrase. Recommencez.");
    replaceWord(prompt);
  } else {
    let replacement = prompt("Entrez le mot de remplacement :");

    let newString = input.replace(word, replacement);
    return console.log("La nouvelle phrase est : " + newString);
  }
};

const isPalindrome = (prompt) => {
  let input = prompt("Entrez un mot :");
  let reversed = "";
  for (let i = input.length - 1; i >= 0; i--) {
    reversed += input[i];
  }
  if (input === reversed) {
    return console.log("\nC'est un palindrome !\n");
  } else {
    return console.log("\nCe n'est pas un palindrome !\n");
  }
};

const stringLength = (prompt) => {
  let input = prompt("Entrez une phrase :");
  return console.log(
    "\nIl y a " + input.length + " caractères dans cette phrase.\n"
  );
};

const uniqueLetters = (prompt) => {
  let input = prompt("Entrez une phrase :");
  let unique = "";
  for (let i = 0; i < input.length; i++) {
    if (unique.indexOf(input[i]) === -1) {
      unique += input[i];
    }
  }
  return console.log("Les lettres uniques sont : " + unique);
};

const countVowels = (prompt) => {
  let input = prompt("Entrez une phrase :");
  let count = 0;
  for (let i = 0; i < input.length; i++) {
      if (input[i] === "a" || input[i] === "e" || input[i] === "i" || input[i] === "o" || input[i] === "u" || input[i] === "y") {
          count++;
      }
  }
  return console.log("Il y a " + count + " voyelles dans cette phrase.");
};


const ConvertminMaj = (prompt) => {
  let input = prompt("Entrez une phrase :");
  
  if (input === input.toUpperCase()) {
    return console.log("Voila la phrase convertie : " + input.toLowerCase());
  } else {
    return console.log("Voila la phrase convertie : " + input.toUpperCase());
  }

 
};

export {
  wordCount,
  ReverseWord,
  replaceWord,
  isPalindrome,
  stringLength,
  uniqueLetters,
  countVowels,
  ConvertminMaj
};
