// # this keyword
// use regular function not arrow function, especially when defining methods inside objects.

const user = {
  name: "Kamal",
  middleName: "Kumar",
  surName: function () {
    // console.log("Sahu");
    console.log(`Name is ${this.name}`);
    console.log(this);
  },
};
// console.log(user.name);
// console.log(user.surName());
// console.log(this);

// # new keyword
// new keyword is a constructor function, allows to create multiple instanses(empty object) from only one object literal

function studentName(firstName, middleName, lastName) {
  this.firstName = firstName;
  this.middleName = middleName;
  this.lastName = lastName;
  return this;
}

const studentOne = new studentName("Kamal", "Kumar", "Sahu");
const studentTwo = new studentName("Lamak", "Kumar", "Misra");
console.log(studentOne); // Overwrite by the studentTwo (without new keyword)
