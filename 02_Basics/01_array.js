// Array
const myArr = [9, 2, 3, 5, 76, "Kamal", true, 6.9]; // In Js differet type of datatype contain in one variable
// console.log(myArr);

// console.log(myArr[5]); // Access by indexing
const myArr2 = new Array(4, 3, 5, 7, 3, 86); //declare using keyword
// console.log(myArr2);

// Array methods
myArr.push("Hello"); // push add a value in the last index
myArr.push(23);
myArr.pop(); // pop remove a value in the last index

myArr.unshift(89); // add a value by first index
myArr.shift(89); // remove a value by first index

// this method enquiries value present or not in the array in the form of boolien
// console.log(myArr.includes(76));
// console.log(myArr.indexOf(76)); // index of the value

const newArr = myArr.join(); // join and change it's type in string
// console.log(newArr);
// console.log(myArr);

// splice, splice

console.log("A", myArr);
const myAr1 = myArr.slice(2, 6); // slice 2-5 index
console.log(myAr1);
console.log("B", myArr);

const myAr2 = myArr.splice(2, 6); // splice 2-5 index
console.log(myAr2);
console.log("C", myArr);
