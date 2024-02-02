// #for in (mainly for object)
//The for...in loop is used to iterate through the keys of an object. The for...of loop cannot be used to iterate over an object. You can use for...in to iterate over an iterable such arrays and strings but you should avoid using for...in for iterables.
// Define a person object

/*
let person = {
  firstName: "John",
  lastName: "Doe",
  age: 30,
  isStudent: false,
  hobbies: ["reading", "traveling", "coding"],
  address: {
    street: "123 Main Street",
    city: "Anytown",
    zipCode: "12345",
  },
  sayHello: function () {
    console.log(
      "Hello, my name is " + this.firstName + " " + this.lastName + "."
    );
  },
};

for (const obj in person) {
  console.log(`key:- ${obj}  | values:- ${person[obj]}`);
}
*/

const myObject = {
  js: "javascript",
  cpp: "C++",
  rb: "ruby",
  swift: "swift by apple",
};

for (const key in myObject) { // for in loop returns keys of objects
  //console.log(`${key} shortcut is for ${myObject[key]}`);
}

const programming = ["js", "rb", "py", "java", "cpp"];

for (const key in programming) {
  // console.log(programming[key]);
}

const map = new Map()
map.set('IN', "India")
map.set('USA', "United States of America")
map.set('Fr', "France")
map.set('IN', "India")

for (const key in map) {
    console.log(key);
}
