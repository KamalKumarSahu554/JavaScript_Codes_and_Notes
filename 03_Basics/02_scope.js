// Scope

// Nasted scope
/*
function one() {
  const userName = "Kamal";
  console.log("Raman");
  function two() {
    const website = "youtube";
    return;
    console.log(userName);
  }
  // console.log(website);
  two();
  console.log("1");
}
one();
console.log("2");

*/

//-------------Imp Function--------------//

addOne(5); // execute
console.log(addOne(5));
function addOne(num) {
  return num + 1;
}

// addTwo(5); //Not execute
const addTwo = function (num) {
  return num + 2;
};
