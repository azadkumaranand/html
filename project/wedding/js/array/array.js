/*  ******************Array************************* */

//array is a data type
//array can stroe one or more values in one variable
// let x = "azad", 3, "gulam";//this is the wrong way to store multiple values in one variable
//values inside an array can be any data type
//array ka index zero se start hota h

let arr = ['azad', 'badal', 'sultan', 'salman', 45, 'suman', 856, ['suman', 'ponung', 45, 16]];

console.log(arr[3]);//output = salman
//access suman from arr
console.log("array value: ", arr[7][0]);

//access array elements by for loop
for(let i=0; i<8;i++){
    console.log(arr[i]);
    // console.log(arr2[i]);
}

//access array elements by while loop
let a = 0;
while(a<8){
    console.log(arr[a]);
    a++;//post increment by one
}

//function is a set of code which execute when we called that function

function myFunc (){
    console.log("hello my function");
}
console.log("before calling function")
myFunc();//code inside function execute now

//function with some parameters
function sum(a, b, c, d){
    console.log("hello sum function", a+c+b);
    console.log(d+c)// this will return NaN => not a number
    return ["azad", 45, 74];
    console.log("after return")
    return a+b+c+d;
}
//call function with some arguments
let funval = sum(26, 74, 32, 74);
console.log(funval);


let c;
console.log(c);//when you declear a variable but not assign value that will return undefined

//access array elements by foreach method
function dummy (){
    console.log("dumyś");
}

//anonymus function=> function jiska nam na ho
arr.forEach(function(array_element){
    console.log(array_element);
});

console.log("Array Type: ", typeof(arr));