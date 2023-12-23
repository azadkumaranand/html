// console.log("hello wolrd inside script file");

let varName = 'azad';
let age = 30;
let info = "hello world my name is azad kumar";
console.log(info);

console.log(info);

//selection of html elements by id

let menubar = document.getElementById('menubar');
console.log(menubar);

//what is function and how can i declear a function
//function is a set of code which executes when we call that function

function myFunction(){
    console.log("hello world inside function i am saying")
}

console.log("below function")

//how can i called a function
// myFunction()

//how to add event on selected html element

menubar.addEventListener('click', myFunction);