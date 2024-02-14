//toString() => convert a number to numeric string

let x = 45;
let y = x.toString();
console.log(typeof(x));
console.log(typeof(y));

//'744'=> numeric string
//'854axc'=> not a numeric string

//parseInt()=>convert numeric string to integer

let z = '45';
let l = '45.63';

console.log(typeof(z));

let a = parseInt(z);
let m = parseInt(l);

console.log(typeof(a));  
console.log(m);  

//parseFloat()=> convert numeric string to decimal number(float)

let b = '48.65';

console.log(typeof(b));

let c = parseFloat(b);
console.log(typeof(c));
console.log(c);

//toExponential() => return a number written in exponential notation

console.log(c.toExponential());

//4.865e+1 = 4.865*10^1
//4654 = 4.654*1000 = 4.654e+3 (exponential notation)

//toFixed() => return a number written with a number of decimals

let d = 865.3520035;

let e = d.toFixed(2);

console.log(e);
console.log(typeof(e));
console.log(typeof(parseFloat(e)));

//toPrecision() => return a number written with a specified length

let f = 85.4550042;

let g = f.toPrecision(4);

console.log(g);