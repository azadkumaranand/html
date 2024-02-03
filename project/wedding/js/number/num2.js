let a = 40;
let b = "20";//it is a numeric string
let c = 12;

console.log(a === b);

console.log(a+b);//concatinate a with b
console.log(a+c+b);//output: 3220
console.log(a+b+c);//output: 202012

//+ operator is used to contatinate the two or more stirng

console.log(a/b);

console.log(a-b);

console.log(a*b);

let d = "10a";//this is not a numeric string

console.log(a/d);//output: NaN

console.log(a-d);//output: NaN

console.log(a*d);//output: NaN

//NaN=Not a number

//isNaN() this function is used for check a number is or not
console.log(isNaN(a*d));//return: true;

