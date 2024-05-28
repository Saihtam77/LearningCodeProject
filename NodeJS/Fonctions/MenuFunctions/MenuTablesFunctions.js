const createTable = (prompt) => {
  console.log(
    "Entrez la valeur a faire rentrer dans votre ou vos tablaux: (3 valeurs maximum par tableau)"
  );
  let tableau = [];
  for (let i = 0; i < 3; i++) {
    const input = prompt(`valeurs ${i + 1}:`);
    tableau.push(input);
  }
  console.log("Tableau créé : " + tableau);

  return tableau;
};

const tablesFusion = (prompt) => {
  console.log("\nCréation du premier tableau : \n");
  let tableau1 = createTable(prompt);
  console.log("\nCréation du deuxième tableau : \n");
  let tableau2 = createTable(prompt);

  let tableau3 = tableau1.concat(tableau2);
  let noDoubleTable = [];
  for (let i = 0; i < tableau3.length; i++) {
    if (!noDoubleTable.includes(tableau3[i])) {
      noDoubleTable.push(tableau3[i]);
    }
  }
  return console.log("\nVoici votre tableau fusionner : " + noDoubleTable);
};

const findUniqueElements = (prompt) => {
  let table = createTable(prompt);
  let uniqueTable = [];
  for (let i = 0; i < table.length; i++) {
    if (!uniqueTable.includes(table[i])) {
      uniqueTable.push(table[i]);
    }
  }

  return console.log(
    "Voici votre tableau avec les valeurs uniques: " + uniqueTable
  );
};

const sumTable = (prompt) => {
  console.log("\nCréation du premier tableau : \n");
  let tableau1 = createTable(prompt);
  console.log("\nCréation du deuxième tableau : \n");
  let tableau2 = createTable(prompt);

  //sum of the two tables
  let sumTable = [];
  if (tableau1.length === tableau2.length) {
    for (let i = 0; i < tableau1.length; i++) {
      sumTable.push(parseInt(tableau1[i]) + parseInt(tableau2[i]));
    }
  } else {
    //return empty table
    console.log(
      "Les deux tableaux n'ont pas la même taille ou vous avez rentrez des valeurs incorrectes telle que des lettres ou des caractères spéciaux. Veuillez recommencer."
    );
    return [];
  }

  return console.log("\nVoici la somme total des deux tableau " + sumTable);
};

const findMinMax = (prompt) => {
  let table = createTable(prompt);
  let min = Math.min(...table);
  let max = Math.max(...table);
  console.log(
    `Le minimum de votre tableau est ${min} et le maximum est ${max}`
  );
  return [min, max];
};

const sumEvenNumbers = (prompt) => {
  let table = createTable(prompt);
  let sum = 0;
  for (let i = 0; i < table.length; i++) {
    if (table[i] % 2 === 0) {
      sum += table[i];
    }
  }
  console.log(`La somme des nombres pairs de votre tableau est de ${sum}`);
  return sum;
};

const reverseTables = (prompt) => {
  let table = createTable(prompt);
  let reverseTable = [];
  for (let i = table.length - 1; i >= 0; i--) {
    reverseTable.push(table[i]);
  }
  return reverseTable;
};

export {
  createTable,
  tablesFusion,
  findUniqueElements,
  sumTable,
  findMinMax,
  sumEvenNumbers,
  reverseTables,
};
