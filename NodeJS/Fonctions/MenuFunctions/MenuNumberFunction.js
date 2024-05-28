const factorial = (prompt) => {
  const number = parseInt(prompt("Enter a number: "));
  let fact = 1;
  for (let i = 1; i <= number; i++) {
    fact *= i;
  }
  console.log("The factorial of " + number + " is " + fact);
};

const fizzBuzz = (prompt) => {
  const number = parseInt(prompt("Enter a number: "));
  for (let i = 1; i <= number; i++) {
    if (i % 3 == 0 && i % 5 == 0) {
      console.log("FizzBuzz");
    } else if (i % 3 == 0) {
      console.log("Fizz");
    } else if (i % 5 == 0) {
      console.log("Buzz");
    } else {
      console.log(i);
    }
  }
};

function maxNumber(prompt) {
  const number1 = parseInt(prompt("Enter the first number: "));
  const number2 = parseInt(prompt("Enter the seconde number: "));

  // tunary operator
  number1 > number2
    ? console.log(number1 + " is the max")
    : console.log(number2 + " is the max");
}

const multiplicationTable = (prompt) => {
  const number = parseInt(prompt("Enter a number: "));
  for (let i = 1; i <= 10; i++) {
    console.log(number + " x " + i + " = " + number * i);
  }
};

function paireOrNot(prompt) {
  const number = parseInt(prompt("Enter a number: "));
  if (number % 2 == 0) {
    console.log("The number is paire");
  } else {
    console.log("The number is unpaire");
  }
}

const positiveOrNegative = (prompt) => {
  const number = parseInt(prompt("Enter a number: "));
  number > 0
    ? console.log(number + " is positive")
    : number < 0
    ? console.log(number + " is negative")
    : console.log(number + " is zero");
};

const returnInversNumber = (prompt) => {
  const number = parseInt(prompt("Enter a number: "));
  let inversNumber = number.toString().split("").reverse().join("");
  console.log("The invers of " + number + " is " + inversNumber);
};

const sumNumber = (prompt) => {
  const number = parseInt(prompt("Enter a number: "));
  let sum = 0;
  for (let i = 0; i <= number; i++) {
    sum += i;
  }
  console.log("The sum of numbers from 0 to " + number + " is " + sum);
};

export {
  factorial,
  fizzBuzz,
  maxNumber,
  multiplicationTable,
  paireOrNot,
  positiveOrNegative,
  returnInversNumber,
  sumNumber
};
