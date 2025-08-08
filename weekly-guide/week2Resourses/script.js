// let numbers = [1, 2, 3];
// let sameNumbers = numbers.map(num => num);

// console.log("This is map",sameNumbers); // [1, 2, 3]
// console.log(numbers);     // [1, 2, 3] (original unchanged)

// // let myMap = new Map();
// // myMap.set('name', 'Mohit');
// // myMap.set(1 ,42 );

// // console.log(myMap.get(1)); // Answer
// // console.log(myMap.size); // 3
// // console.log(myMap.has('name')); // true
// // console.log(myMap.has('age'));

// //maps 
// let myMap = new Map();
// myMap.set('name', 'Mohit');
// myMap.set(42, 'Answer');
// myMap.set({ key: 'obj' }, 'Object key');

// console.log(myMap.get(42)); // Answer
// console.log(myMap.size); // 3


// // object
// let myObj = {
//   name: 'Mohit',
//   42: 'Answer'
// };
// console.log(myObj["42"]); // Answer


// // Type of Array	Example	Notes
// // Numeric Array	[10, 20, 30]	Contains only numbers
// // String Array	["apple", "banana", "mango"]	Contains only strings
// // Boolean Array	[true, false, true]	Contains only booleans
// // Mixed Array	["apple", 42, true, {name: "Mohit"}]	Can mix any data types
// // Object Array	[{id: 1}, {id: 2}]	Common in APIs, holds objects
// // Array of Arrays (Multidimensional)	[[1, 2], [3, 4]]	Useful for matrices, tables



// // Numeric
// let nums = [1, 2, 3];

// // String
// let fruits = ["apple", "banana"];

// // Boolean
// let flags = [true, false, true];

// // Mixed
// let mixed = ["Mohit", 21, true, { college: "SGU" }];

// // Object Array
// let users = [
//   { name: "Mohit", age: 21 },
//   { name: "Rahul", age: 22 }
// ];

// // Multidimensional
// let matrix = [
//   [1, 2],
//   [3, 4]
// ];

// // Sparse
// let sparse = [1, , 3]; // index 1 is empty

// // Typed Array
// let buffer = new Int16Array([10, 20, 30]);


// callback functions  
function greet(name, callback) {
  console.log(`Hello, ${name}!`);
  callback(); // Execute the callback function
}

function sayGoodbye() {
  console.log("Goodbye!");
}

greet("Mohit", sayGoodbye); // Passing sayGoodbye as a callback