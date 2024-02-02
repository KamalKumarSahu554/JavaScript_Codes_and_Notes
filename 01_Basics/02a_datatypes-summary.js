//  #Primitive // Pass by Value (Stack Memory)
//  7 types : String, Number, Boolearn, null, undefined, Symbol, BigInt

const name = "Kamal Kumar Sahu" //String
const score = 100; // Number
const scoreValue = 100.3; // Number

const isLoggedIn = false; // Boolearn
const outsideTemp = null; // null 
let userEmail; // undefined

const id = Symbol("123"); // Symbol
const anotherId = Symbol("123"); // Symbol

const bigNumber = 345654357658756736274923n; // BigInt
// console.log(id === anotherId); 

console.log(typeof name); 



// #Reference (Non primitive) // Pass by reference (Heap Memory)
// Array, Objects, Functions

const heros = ["shaktiman", "naagraj", "doga"]; // A

let myObj = {
  name: "hitesh",
  age: 22,
};

const myFunction = function () {
  console.log("Hello world");
};

// https://262.ecma-international.org/5.1/#sec-11.4.3
