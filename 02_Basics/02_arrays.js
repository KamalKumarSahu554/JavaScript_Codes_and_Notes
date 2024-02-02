const marvel_heros = ["IornMan", "Thor", "SpiderMan"];
const DC_Herors = ["BatMan", "Super", "Wonder"];

// array in the array
// marvel_heros.push(DC_Herors);

// Concatinate to arrays
const allHeros = marvel_heros.concat(DC_Herors);

// This is a spred operator like concate it can concate any no. of arrys
const new_Heros = [...marvel_heros, ...DC_Herors];

const Arr = [1, 2, 3, [4, 5, 6], [7, 8, 9, [10, 11, 12]]];
const Flated_array = Arr.flat(Infinity);
console.log(Flated_array);
