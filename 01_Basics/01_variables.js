const accountId = 123;
let accountEmail = "Ks123@gmail.com";
var accountPW = "12321";
accountCity = "Berhampur";
let accountState;
console.log([accountId, accountEmail, accountPW, accountState]);

// accountId ='2122' // constant can't be change
accountEmail = "kamal.@mail.com";
accountPW = "3214";
accountCity = "Burla";

console.table([accountId, accountEmail, accountPW, accountCity, accountState]);

/*
Prefer not to use var
Becaue of issue in block scope and functional scope
*/
