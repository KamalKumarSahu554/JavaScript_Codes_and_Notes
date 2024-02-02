const google = new Object(); // singleton object
const chrome = {}; // Non-singleton object

google.id = "123@.com";
google.name = "Kamal";
google.isLoggedIn = false;

// console.log(Object.keys(google));
// console.log(Object.values(google));
// console.log(Object.entries(google));

// console.log(google);

// Nasting object
const user = {
  email: "987@gmail.com",
  userName: {
    user1: {
      firstName: "Kamal",
      lastName: "Sahu",
    },
    user2: {
      name: "Lamak",
      lastName: "Uhas",
    },
  },
};

// console.log(user.userName.user2.lastName)

const obj1 = { 1: "a", 2: "b" };
const obj2 = { 3: "a", 4: "b" };

// const obj3 = Object.assign({}, obj1, obj2);
// console.log(obj3);

const obj3 = { ...obj1, ...obj2 }; // Spread operator
// console.log(obj3);

// console.log(google);
// console.log(Object.keys(google)); // Return in arrays
// console.log(Object.values(google));
// console.log(Object.entries(google));

// console.log(google.hasOwnProperty('isLogged')); // asking to the object (Return in bullien)

// # Object Destructuring
const Employee = {
  Id: "123@com",
  Name: "Kamal",
  SerialNoOfEmployee: "07",
};

// console.log(Employee.Id);

const { SerialNoOfEmployee: S_No } = Employee; // destructuring
console.log(S_No) 