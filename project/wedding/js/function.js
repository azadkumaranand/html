// set (box) of code which execute (run) when we call that function
console.log("your function file")

function testFunction(){
    alert("hello world");
    console.log("ehllo your function is called")
}

//call function

testFunction()

console.log("after your function")

//call function

testFunction()

//function parameters

let a=8;//when you delclear a variable but not assigned value then value of variable will be undefined
//a=> is global variable
console.log("hello undefined", a)

function func1(b, c){
    let d = 4;///local variable of func1
    //global variable can be used inside functions
    //but local variable can't be used outside of functions
    console.log("function with parameters", a, b, c);
    console.log(d);
    return b+c;
    console.log("code after return");
    //when function return after return code will not execute
    return ["azad",74, 78, 54];
}
// func1();
let funcval = func1(78, "gulam");
console.log(funcval);