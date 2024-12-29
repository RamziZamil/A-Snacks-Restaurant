let userName = "";
let userGender = "";

userName = prompt("Enter your name:");
userGender = prompt("Enter your gender (male/female):").toLowerCase();
let title = "";
let check = true;
while (check) {
  if (userGender === "male") {
    title = "Mr.";
    check = false;
  } else if (userGender === "female") {
    title = "Ms.";
    check = false;
  } else {
    userGender = prompt("Enter your gender (male/female):").toLowerCase();
  }
}
alert(`Welcome ${title} ${userName || "Guest"}`);

const order = prompt(
  "What would you like to order? (shawarma, zenger, burger)"
);
if (order) {
  alert(`Your ${order} is being prepared!`);
  console.log(`${userName} ordered ${order}`);
} else {
  alert("You did not place an order.");
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
