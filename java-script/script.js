// Simple JavaScript Example

// Step 1: Print message in console
console.log("Welcome to JavaScript!");

// Step 2: Show an alert
alert("Hello! This is a JavaScript demo.");

// Step 3: Take user input
let name = prompt("What is your name?");
let age = prompt("Enter your age:");

// Step 4: Do some calculation
let nextYearAge = Number(age) + 1;

// Step 5: Show output in console and on web page
console.log("Hello " + name + ", next year you will be " + nextYearAge + " years old!");
document.getElementById("output").innerHTML =

  "Hello <b>" + name + "</b>! Next year, you will be <b>" + nextYearAge + "</b> years old.";
