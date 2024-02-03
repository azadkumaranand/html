let a = 999999999999999;
console.log(a);
let b = 999999999999999n;
console.log(b);
//1KB = 1000B

//8byte = 1bit

//if you want to store a number with more than 15 digits you have to use BitInt

let c = BigInt(9999999999999999);

console.log(c);