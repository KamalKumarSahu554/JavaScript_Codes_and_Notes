//Function Definition
function myName() {
  console.log("K");
  console.log("A");
  console.log("M");
  console.log("A");
  console.log("L");
}
// myName(); // Function execution

// function addTwoNumber(number1, number2) {
//   //(number1, number2)Parameter
//   console.log(number1 + number2);
// }

// addTwoNumber(2, 3); // Argument

function addTwoNumber(number1, number2) {
  return number1 + number2;
}

const result = addTwoNumber(2, 6);
// console.log("Result: ", result);

function logInUserMessage(username) {
  return `${username} just logged in`;
}
// console.log(logInUserMessage("Kamal"));

// Rest or spread operator
function calculateCartPrice(...num) {
  return num;
}
// console.log(calculateCartPrice(100, 30, 12, 1444, 12));

const user = {
  username: "Kamal",
  price: 1999,
};

function handelObject(anyobject) {
  console.log(
    `Username is ${anyobject.username} and Price is ${anyobject.price}.`
  );
}
handelObject(user);

const myArray = [100, 200, 300, 400];

function returnArrayValue(getArray) {
  return getArray[2];
}
console.log(`Third Value is ${returnArrayValue(myArray)}`);
