/*  ******************Array************************* */

//array is a data type
//array can stroe one or more values in one variable
// let x = "azad", 3, "gulam";//this is the wrong to store multiple values in one variable
//values inside an array can be any data type
let arr = ['azad', 'badal', 'sultan', 'salman', 45, 'suman', 856];

// console.log(arr[3]);

//access array elements by for loop
for(let i=0; i<7;i++){
    console.log(arr[i]);
}

//access array elements by while loop
let a = 0;
while(a<7){
    console.log(arr[a]);
    a++;
}

//function is a set of code which execute when we called that function

function myFunc (){
    console.log("hello my function");
}
console.log("before calling function")
myFunc();//code inside function execute now

function sum(a, b, c, d){
    console.log("hello sum function", a+c+b);
    console.log(d+c)// this will return NaN => not a number
    return ["azad", 45, 74];
    console.log("after return")
    return a+b+c+d;
}
let funval = sum(26, 74, 32, 74);
console.log(funval);


let c;
console.log(c);//when you declear a variable but not assign value that will return undefined

//access array elements by foreach method
function dummy (){
    console.log("dumyś");
}
arr.forEach(function(e){
    console.log(e);
    console.log("hel")
});
