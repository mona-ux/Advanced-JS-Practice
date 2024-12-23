// Tasks on String Methods

// 1. Convert the sentence to all uppercase and all lowercase and display the results
let sentence = prompt("Enter a sentence: ");
console.log("Uppercase: " + sentence.toUpperCase());
console.log("Lowercase: " + sentence.toLowerCase());

// 2. Count the total number of characters (including spaces)
console.log("Total characters: " + sentence.length);

// 3. Count how many times a specific character (e.g., 'a') appears in the string
let character = 'a';  // you can change this to any character
let count = (sentence.split(character).length - 1);
console.log(`The character '${character}' appears ${count} times.`);

// 4. Extract the first word and the last word from a sentence and display them separately
let words = sentence.split(" ");
let firstWord = words[0];
let lastWord = words[words.length - 1];
console.log("First word: " + firstWord);
console.log("Last word: " + lastWord);

// 5. Input a string and remove all the spaces. Display the modified string
let stringWithoutSpaces = sentence.replace(/\s+/g, '');
console.log("String without spaces: " + stringWithoutSpaces);

// 6. Check if a string starts with a specific word or ends with a specific word
let startsWithHello = sentence.startsWith("Hello");
let endsWithHello = sentence.endsWith("Hello");
console.log("Starts with 'Hello': " + startsWithHello);
console.log("Ends with 'Hello': " + endsWithHello);

// 7. Take a sentence, split it into an array of words, and display the array
let wordArray = sentence.split(" ");
console.log(wordArray);

// 8. Replace all instances of a specific word with another word
let replacedSentence = sentence.replace(/good/g, "excellent");
console.log(replacedSentence);


// Tasks on Arrays

let numbers = [5, 10, 15, 20, 25];
console.log("Numbers: " + numbers);
numbers.push(30);  // Add a new number
console.log("After adding 30: " + numbers);
numbers.shift();  // Remove the first number
console.log("After removing the first number: " + numbers);

// 2. Create an array of 5 strings and:
// Display the strings, Sort the array alphabetically without using functions
let strings = ["apple", "orange", "banana", "grape", "kiwi"];
console.log("Original strings: " + strings);
strings.sort();  // Sort alphabetically
console.log("Sorted strings: " + strings);

// 3. Create an array of numbers. Remove duplicate numbers from the array without using functions
let numbersWithDuplicates = [1, 2, 2, 3, 3, 4, 5, 5];
let uniqueNumbers = [];
for (let i = 0; i < numbersWithDuplicates.length; i++) {
  if (!uniqueNumbers.includes(numbersWithDuplicates[i])) {
    uniqueNumbers.push(numbersWithDuplicates[i]);
  }
}
console.log("Unique numbers: " + uniqueNumbers);

// 4. Create an array of numbers and find the largest and smallest number manually
let numbersArray = [5, 12, 8, 21, 3];
let largest = numbersArray[0];
let smallest = numbersArray[0];
for (let i = 1; i < numbersArray.length; i++) {
  if (numbersArray[i] > largest) largest = numbersArray[i];
  if (numbersArray[i] < smallest) smallest = numbersArray[i];
}
console.log("Largest: " + largest);
console.log("Smallest: " + smallest);

// 5. Reverse an array without using built-in functions
let reverseArray = [1, 2, 3, 4, 5];
let reversed = [];
for (let i = reverseArray.length - 1; i >= 0; i--) {
  reversed.push(reverseArray[i]);
}
console.log("Reversed array: " + reversed);

// 6. Create two arrays of equal length. Combine them into a single array by alternately taking elements from each array
let array1 = [1, 2, 3];
let array2 = ["a", "b", "c"];
let combinedArray = [];
for (let i = 0; i < array1.length; i++) {
  combinedArray.push(array1[i], array2[i]);
}
console.log("Combined array: " + combinedArray);


// Tasks on Objects

// 1. Create an object to represent a student with properties like: Name, age, and class. Display each property on the console
let student = {
  name: "Mona",
  age: 19,
  class: "12th grade"
};
console.log(student.name);
console.log(student.age);
console.log(student.class);

// 2. Add a new property (e.g., "grade") to the object and display it
student.grade = "A";
console.log(student.grade);

// 3. Create an object with details about a car (e.g., make, model, year, color). Change the value of one of the properties and display the updated object
let car = {
  make: "Toyota",
  model: "Corolla",
  year: 2020,
  color: "Blue"
};
car.color = "Red";  // Update color
console.log(car);

// 4. Create multiple objects (e.g., students or products). Store them in an array and display the details of each object
let students = [
  { name: "Mona", age: 19, grade: "B" },
  { name: "Sara", age: 20, grade: "A" },
  { name: "Hina", age: 18, grade: "C" }
];
students.forEach(student => console.log(student));

// 5. Create an object to represent a book in a library with properties like title, author, and availability. Update the availability status manually and display the updated object
let book = {
  title: "To Kill a Mockingbird",
  author: "Harper Lee",
  availability: "Available"
};
book.availability = "Checked Out";  // Update availability
console.log(book);


// Comprehensive Task

let database = [
  { name: "Mona", age: 18, grade: "A" },
  { name: "Sara", age: 20, grade: "B" },
  { name: "Hina", age: 19, grade: "C" }
];

// Add a new object
database.push({ name: "Emma", age: 22, grade: "A+" });

// Update an object
database[1].grade = "A";

// Delete an object
database.splice(2, 1);

console.log(database);
