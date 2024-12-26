// Part 1: Array Methods

// Multiply by Two
function doubleNumbers(arr) {
    return arr.map(num => num * 2);
}

// Filter Even Numbers
function filterEvenNumbers(arr) {
    return arr.filter(num => num % 2 !== 0);
}

// Find Maximum
function findMaximum(arr) {
    return arr.reduce((max, current) => (current > max ? current : max), arr[0]);
}

// Part 2: String Methods

// Convert to Uppercase
function convertToUppercase(str) {
    return str.toUpperCase();
}

// Find a Word
function findWord(str, word) {
    return str.includes(word);
}

// Trim Whitespace
function trimSpaces(str) {
    return str.trim();
}

// Part 3: Object Methods

// Print Object Values
function printValues(obj) {
    return Object.values(obj);
}

// Convert Object to Array
function objectToArray(obj) {
    return Object.entries(obj);
}

// Employee Record
const employee = {
    name: "Mona",
    department: "MERN",
    salary: 50000,
    updateDepartment(newDept) {
        this.department = newDept;
    },
    increaseSalary(percentage) {
        this.salary += this.salary * (percentage / 100);
    }
};

 

// Array Methods
console.log(doubleNumbers([1, 2, 3, 4]));  
console.log(filterEvenNumbers([1, 2, 3, 4])); 
console.log(findMaximum([1, 2, 3, 4]));  

// String Methods
console.log(convertToUppercase("hello"));  
console.log(findWord("hello world", "world"));  
console.log(trimSpaces("   hello world   "));  

// Object Methods
console.log(printValues({ a: 1, b: 2, c: 3 }));  
console.log(objectToArray({ a: 1, b: 2, c: 3 }));  

// Employee Record
employee.updateDepartment("Full Stack");
console.log(employee.department);  
employee.increaseSalary(15);
console.log(employee.salary);  
