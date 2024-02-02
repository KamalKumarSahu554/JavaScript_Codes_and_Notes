// # for of (mainly used for  srings and arrays)

// Syntax
// for (const iterator /*variable*/ of object /*iterable*/) {
//   //code block to be executed
// }

const arr = [100, 40, 70, 300, 700, 480];
for (const num of arr) {
  // console.log(`Numbers are ${num}`);
}

const str = "My Name is Kamal Kumar Sahu";
for (const Name of str) {
  // if (Name == " ") {
  //   continue;
  // }
  // console.log(Name);
}

//# Map 
// The Map object holds key-value pairs and remembers the original insertion order of the keys. Any value (both objects and primitive values) may be used as either a key or a value.

const map = new Map();
map.set("IN", "India");
map.set("USA", "United States of America");
map.set("Fr", "France");
map.set("IN", "India");

// console.log(map);

for (const [key, value] of map) {
  console.log(key, ":-", value);
} // in forof loop Map iterate like this but object can not iterate like this (use forin loop)
