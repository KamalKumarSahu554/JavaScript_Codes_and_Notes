// Object.create = constructor method (singleton)

//object literals

const mySym = Symbol("key1"); // symbol

const JsUser = {
  [mySym]: "mykey1", // syntax use symbol in object
  name: "Kamal",
  age: 20,
  location: "Burla",
  email: "ks4432128@gmail.com",
  isLoggedIn: false,
  lastLoginDays: ["Sat", "Mon"],
};

// console.log(JsUser.age); // access Objects
// console.log(JsUser["age"]); // anothore type - access Objects
// console.log(JsUser[mySym]);

JsUser.age = 23; // Change key values
// console.log(JsUser);
// Object.freeze(JsUser); // we can't change values now
JsUser.age = 16;
// console.log(JsUser);

JsUser.greeting = function () {
  console.log("Hello Js User");
};
JsUser.greetingTwo = function () {
  console.log(`Hello Js User ${this.name}`);
};
console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());
console.log(JsUser);