const array1 = [1, 4, 9, 16];

// Pass a function to map
const map1 = array1.map((x) => x * 2);

console.log(map1);
// Expected output: Array [2, 8, 18, 32]

const originalArray=[1,2,3,4,5,6,7,8,9,10,11,12];

const squares =originalArray.map((x)=>(x*x));
console.log(squares);
const sqrt=squares.map((x)=>Math.sqrt(x));
console.log(sqrt);

const names = ["alice", "bob", "charlie", "danielle"]
// -->        ["Alice", "Bob", "Charlie", "Danielle"]

const capitalised =names.map((name)=>name[0].toUpperCase()+name.slice(1));
console.log(capitalised);


const pokemon = ["Bulbasaur", "Charmander", "Squirtle"]
// -->          ["<p>Bulbasaur</p>", "<p>Charmander</p>", "<p>Squirtle</p>"]
// Your code here
const modifiedOne=pokemon.map((element)=>{
    return `<p>${element}</p>`
});

console.log(modifiedOne);