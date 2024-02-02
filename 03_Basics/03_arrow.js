const user = {
  username: "Kamal",
  price: 1999,

  massege: function () {
    console.log(`${this.username} , welcome to website`); // Use of this in a function
  },
};
// user.massege();
// user.username = "Lamak";
// user.massege();

// console.log(user);
// console.log(this);

// function any() {
//   let username = "Kamal"
//   console.log(this.username); // this can not use like this
// }
// any()

//-------------------------------------------//

// # Types of function declaration

// 1
// function printName() {
//   console.log("Kamal Kumar Sahu");
// }
// printName();

// 2
// const printName = function () {
//   console.log("Kamal Kumar Sahu");
// };
// printName();

// 3 Arrow function  () => {}
const printName = () => {
  console.log("Kamal Kumar Sahu");
};
// printName();

//Explishit return arrow function
// const addTwo = (num1, num2) => {
//   return num1 + num2;
// };
// console.log(addTwo(2, 3));

//Implishit return arrow function
// const addTwo = (num1, num2) => num1 + num2;
const addTwo = (num1, num2) => (num1 + num2);
console.log(addTwo(2, 3));
