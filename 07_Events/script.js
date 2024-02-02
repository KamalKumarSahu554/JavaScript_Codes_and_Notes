// # Event handling
// two type 1- inline handeling, 2- in Js functions
// node.event = () => { // Handle here }

/*
let btn1 = document.querySelector("#btn1");
btn1.onclick = () => {
  console.log("You clicked to the button");
};
*/

let box = document.querySelector("div");
box.onmouseover = () => {
  // alert("Hover the mouse");
};

// # Event Object
// All event handles have access to the object's properties and methods.
// node.event = (event ) => { // Handle here }

// # Event Listeners
// node.addEventListener(enevt, callback)
// node.removeEventListener(enevt, callback)
// Note: the callback reference should be to same to remove

let btn1 = document.querySelector("#btn1");

btn1.addEventListener("click", () => {
  console.log("You clicked to the button - handler1");
});

btn1.addEventListener("click", () => {
  console.log("You clicked to the button - handler2");
});
const handler3 = () => {
  console.log("You clicked to the button - handler3");
};
btn1.addEventListener("click", handler3);
btn1.addEventListener("click", () => {
  console.log("You clicked to the button - handler4");
});

btn1.removeEventListener("click", handler3);

// Practice
let mode = document.querySelector("#mode");
let currMode = "light"; // dark

let modSelect = document.querySelector("body");
mode.addEventListener("click", () => {
  if (currMode === "light") {
    currMode = "dark";
    modSelect.style.backgroundColor = "black";
  } else {
    currMode = "light";
    modSelect.style.backgroundColor = "white";
  }
  console.log(currMode);
});
