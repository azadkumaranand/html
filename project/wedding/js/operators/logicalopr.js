//logical operators
// these operators also return boolean values
//(&&) and operator => if both side of this operator has true value only then it will return true

let a = 10;
let b = 12;
let c = 45;
let d = -85;

console.log(a==b);
console.log(a<=c);

console.log(a==b && a<=c);//return false (because one side is false and another side is true)
console.log(a<b && a<=c);//return true(because both sides have true value)

//(||) or operator => if any side of this operator has true value then it will return true

console.log(a==b || a<=c);//return true (because right side has true value)

console.log(a<b || a<=c);//return true(because both sides have true value)

console.log(a>b || a>=c);//return false(because both sides have false value)



