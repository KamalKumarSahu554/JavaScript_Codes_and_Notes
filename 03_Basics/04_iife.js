// Immediatly Invoked Function Expression (IIFE)
// use for stay away from global scope polution. (to create private scope).

// function any() {
//   console.log(`DB CONNECTED`);
// }
// any();

// Named IIFE
(function any() {
  console.log(`DB CONNECTED`);
})(); // Immediate calling (semicolumn is important)

((web /*paramiter passing*/) => {
  console.log(`DB CONNECTED ${web}`);
})("AMAZON" /*argument*/);
