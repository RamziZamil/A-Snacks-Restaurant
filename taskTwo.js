let userName = "";
let userGender = "";
let userOrder = "";
let userAnswers = [];

function askGender() {
  let gender = prompt("Enter your gender (male/female):").toLowerCase();
  while (gender !== "male" && gender !== "female") {
    gender = prompt(
      "Invalid input. Please enter your gender (male/female):"
    ).toLowerCase();
  }
  return gender;
}
userName = prompt("Enter your name:") || "Guest";
userGender = askGender();
let title = userGender === "male" ? "Mr." : "Ms.";
userAnswers.push(userName, userGender);
alert(`Welcome ${title} ${userName}`);
userOrder =
  prompt("What would you like to order? (shawarma, zenger, burger)") ||
  "nothing";
alert(`Your ${userOrder} is being prepared!`);
console.log(`${userName} ordered ${userOrder}`);
userAnswers.push(userOrder);
console.log("User details:");
for (let i = 0; i < userAnswers.length; i++) {
  console.log(userAnswers[i]);
}

//Q1
for (let i = 0; i <= 5; i++) {
  alert(i);
}

//Q2
let number;

while (true) {
  number = prompt("Please enter a number between 0 and 100:");

  if (number >= 0 && number <= 100) {
    break;
  } else {
    alert("Invalid input. Please enter a number between 0 and 100.");
  }
}

alert(`Thank you! You entered a valid number: ${number}`);

//Q3

let Data = parseInt(prompt("Please enter an integer:"));

let total = 0;

for (let i = 0; i <= Data; i++) {
  total += i;
}

alert(`The sum of integers from 0 to ${Data} is: ${total}`);

///////////////////////////////////////////////////////////////////////////////////////////////////////

function AgeChecker(age) {
  console.log(age >= 18 ? "The user is Adult" : "The user is Minor");
}

AgeChecker(20);
AgeChecker(15);

function reverseNumber(num) {
  let reversed = 0;
  for (reversed; num != 0; num = (num / 10) | 0) {
    reversed = reversed * 10 + (num % 10);
  }
  return reversed;
}

let x = 532443;
console.log(reverseNumber(x));

let ar = [5, 3, 2, 4, 4, 3];
rev(ar);
function rev(ar) {
  let revarray = [];
  for (let i = ar.length - 1, j = 0; i >= 0; i--, j++) {
    revarray[j] = ar[i];
  }
  console.log(revarray);
}

for (let i = 0; i <= 15; i++) {
  if (i % 2 == 0) {
    console.log(i + " This Number is EVEN");
  } else if (i % 2 == 1) {
    console.log(i + " This Number is ODD");
  }
}

function evenDash(input) {
  let numberString = input.toString();
  let result = "";

  for (let i = 0; i < numberString.length; i++) {
    result += numberString[i];
    if (
      i < numberString.length - 1 &&
      parseInt(numberString[i]) % 2 === 0 &&
      parseInt(numberString[i + 1]) % 2 === 0
    ) {
      result += "-";
    }
  }

  return result;
}

let inputDash = "025468";
let outputDash = evenDash(inputDash);
console.log(outputDash);

function sortAlpha(input) {
  let lowercase = input.toLowerCase();
  let sortingString = lowercase.split("").sort().join("");

  return sortingString;
}

let input = "Orange";
let output = sortAlpha(input);
console.log(output);
