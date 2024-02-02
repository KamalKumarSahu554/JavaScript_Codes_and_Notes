// # if
// Comparision operator -  <, >, <=, >=, ==, !=, &&, ||, ===(also check datatype), !==

if (true /*condition*/) {
  /*if condition satisfaed then only execute the code (in terms of true or false)*/
} else {
  /*else execute when if condition not true*/
}

let n1 = 2,
  n2 = 1;
if (n1 > n2) console.log(`${n1} greter than ${n2}`); // implishit scope (one liner with semicolumn)

// const balance = 1000

// if (balance > 500) console.log("test"),console.log("test2");

// if (balance < 500) {
//     console.log("less than 500");
// } else if (balance < 750) {
//     console.log("less than 750");

// } else if (balance < 900) {
//     console.log("less than 750");

// } else {
//     console.log("less than 1200");

// }

const userLoggedIn = true;
const debitCard = true;
const loggedInFromGoogle = false;
const loggedInFromEmail = true;

if (userLoggedIn && debitCard && 2 == 3) {
  console.log("Allow to buy course");
}

if (loggedInFromGoogle || loggedInFromEmail) {
  console.log("User logged in");
}
