//# for Each (Only used for array not for strings)

const Name = ["Kamal", "Alok", "Manu", "Arun", "Laxman"];

Name.forEach(function (value) {
  // console.log(value);
});

Name.forEach((value) => {
  // console.log(value); //Using arrow function
});

function PrintMe(print) {
  // console.log(print);
}

Name.forEach(PrintMe);

Name.forEach((value, index, arr) => {
  console.log(value, index, arr);
});

const myCoding = [
  {
    languageName: "javascript",
    languageFileName: "js",
  },
  {
    languageName: "java",
    languageFileName: "java",
  },
  {
    languageName: "python",
    languageFileName: "py",
  },
];

myCoding.forEach((value) => {
  // console.log(value.languageFileName);
});

const values = Name.forEach((value) => {
  return value; // forEach not returning anything (Expected undeifiend)
});
console.log(values);
