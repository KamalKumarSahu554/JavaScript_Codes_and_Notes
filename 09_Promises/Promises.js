// # Promises
// Promise for "eventual" completion of task. It is an object in JS. It is a solution of callback hell.
// Promise have 3 state (Pending, Fulfilld(resolved), Rejected)
// Pending: the result is undefined
// Resolved: the result is a valule (fulfilled)  / resolve(result)
// Rejected: the result is an error object / reject(error)
/**********************************************/

/*
const promiseOne = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log("Async task is completed");
    resolve();
  }, 3000);
});

promiseOne.then(() => {
  console.log("Promise Comsumed");
});

new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log("Async Tack 2");
    resolve();
  }, 1000);
}).then(() => { 
  console.log("Async 2 resolved");
});


const promiseThree = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve({ username: "Kamal", email: "kamal@123.com" });
  }, 1000);
});
promiseThree.then((user) => {
  console.log(user);
});

const promiseFour = new Promise((resolve, reject) => {
  setTimeout(() => {
    let error = true;
    if (!error) {
      resolve({ username: "Lamak", password: "123" });
    } else {
      reject("ERROR: Something Wrong");
    }
  }, 1000);
});

promiseFour
  .then((user) => {
    console.log(user);
    return user.username;
  })
  .then((username) => {
    console.log(username);
  })
  .catch((err) => {
    console.log(err);
  })
  .finally(() => console.log("Promise is eithr resolved or rejected"));
*/

const promiseFive = new Promise((resolve, reject) => {
  setTimeout(() => {
    let error = true;
    if (!error) {
      resolve({ student: "Kamal", roll: 21030 });
    } else {
      reject("ERROR: Different Student");
    }
  }, 1000);
});

async function consumePromiseFive() {
  try {
    const response = await promiseFive;
    console.log(response);
  } catch (error) {
    console.log(error);
  }
}

consumePromiseFive();
