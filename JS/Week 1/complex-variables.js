// Variable Declaration and Reassignment
let age = 19; // 'let' allows reassignment
var city = "Lahore"; // 'var' is function-scoped and also allows reassignment
const country = "Pakistan"; // 'const' is block-scoped and cannot be reassigned

// Reassigning let and var variables
age = 20; // Works fine
city = "Karachi"; // Works fine

// Attempting to reassign a const variable (Uncomment to observe the error)
// country = "India"; // Throws TypeError: Assignment to constant variable.

// Identifying Data Types
let name = "Mona"; // String
let isActive = true; // Boolean
let students = ["Ali", "Sara", "Ahmed"]; // Array
let person = { firstName: "Mona", lastName: "Mobeen" }; // Object
let score = 95; // Number

// Logging data types
console.log(typeof name); // String
console.log(typeof isActive); // Boolean
console.log(typeof students); // Object
console.log(typeof person); // Object
console.log(typeof score); // Number

 
// String Manipulation
 

// Print a welcome message using your name
console.log(`Welcome, ${name}!`);

// Store full name and favorite quote in variables and print a meaningful message
let fullName = "Mona Mobeen";
let favoriteQuote = "Rise & Revive";
console.log(`${fullName} says: "${favoriteQuote}"`);

// Calculate and print the total number of characters in your favorite quote
console.log(`The quote has ${favoriteQuote.length} characters.`);

 
// Part 2: Working with Numbers
 

// Create 10 variables to store numbers
var num1 = 5, num2 = 10, num3 = 15, num4 = 20, num5 = 25;
let num6 = 30, num7 = 35, num8 = 40, num9 = 45, num10 = 50;

// Calculate the SUM of all numbers
let sum = num1 + num2 + num3 + num4 + num5 + num6 + num7 + num8 + num9 + num10;
console.log(`The sum of all numbers is: ${sum}`);

// Find the AVERAGE
let average = sum / 10;
console.log(`The average of all numbers is: ${average}`);

// Multiply all numbers and print the PRODUCT
let product = num1 * num2 * num3 * num4 * num5 * num6 * num7 * num8 * num9 * num10;
console.log(`The product of all numbers is: ${product}`);

// Identify the largest and smallest numbers
let largest = Math.max(num1, num2, num3, num4, num5, num6, num7, num8, num9, num10);
let smallest = Math.min(num1, num2, num3, num4, num5, num6, num7, num8, num9, num10);
console.log(`The largest number is: ${largest}`);
console.log(`The smallest number is: ${smallest}`);

// Complex Arithmetic Operations
let result1 = (num1 + num2) * num3; // Add two numbers, multiply the result by a third
console.log(`Result1: ${result1}`);

let result2 = Math.pow((num4 - num5), num6); // Subtract one number from another and raise it to a power
console.log(`Result2: ${result2}`);

let result3 = (num7 + num8 + num9) / num10; // Add three numbers together, divide by another
console.log(`Result3: ${result3}`);

 
// Greeting Message
 
// Ask the user's name and display a greeting message
let userName = prompt("What is your name?");
alert(`Hello, ${userName}! Welcome to the program.`);

 
// Simple Calculator
 
// Ask the user for two numbers
let number1 = parseFloat(prompt("Enter the first number:"));
let number2 = parseFloat(prompt("Enter the second number:"));

// Perform basic arithmetic operations and display results
alert(`Addition: ${number1 + number2}`);
alert(`Subtraction: ${number1 - number2}`);
alert(`Multiplication: ${number1 * number2}`);
alert(`Division: ${number1 / number2}`);
