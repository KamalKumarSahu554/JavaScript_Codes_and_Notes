/*
// # setTimeout (Async)
console.log("one");
setTimeout(() => {
  console.log("Hello");
}, 2000);
console.log("two");
*/
/*


// # callback
sum = (a, b) => {
  console.log(a + b);
};

calculator = (a, b, sumCallback) => {
  sumCallback(a, b);
};
calculator(7, 3, sum);
*/



// # Callback Hell
// function getData(dataId) {
//   setTimeout(() => {
//     console.log("data", dataId);
//   }, 4000);
// }

/*
function getData(dataId, getNextData) {
  setTimeout(() => {
    console.log("data", dataId);
    if (getNextData) {
      getNextData();
    }
  }, 1000);
}

getData(1, () => {
  console.log("getting data2......");
  getData(2, () => {
    console.log("getting data3......");
    getData(3, () => {
      console.log("getting data4......");
      getData(4, () => {});
    });
  });
});
*/



// # Promises
// Promise for "eventual" completion of task. It is an object in JS. It is a solution of callback hell.
// Promise have 3 state (Pending, Fulfilld(resolved), Rejected)
// Pending: the result is undefined
// Resolved: the result is a valule (fulfilled)  / resolve(result)
// Rejected: the result is an error object / reject(error)

// let promise = new Promise((resolve, reject) => {
//   console.log("I am promise");
//   reject("some error occurred");
// });



// # Async-Await
// async function always return a promise.
// async function myFunc(){}
// await pauses the execution of its surroding async function until the promise is settled.



