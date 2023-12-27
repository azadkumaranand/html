// console.log("hello wolrd inside script file");
//variable is a container whcih store the information
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
    // console.log("you have clicked on menubar");
    // alert("hello you have clicked");
    // console.log(document.getElementById('navlinks'))
    let navlinks = document.getElementById('navlinks');
    // console.log(navlinks.style.display)
    // navlinks.style.display = "flex";
    // menubar.innerHTML = '<i class="fa-solid fa-xmark"></i>';

    if(navlinks.style.display == "none"){
        navlinks.style.display = "flex";
        menubar.innerHTML = '<i class="fa-solid fa-xmark"></i>';
    }else{
        navlinks.style.display = "none";
        menubar.innerHTML = '<i class="fa-solid fa-bars"></i>';
    }
    
}

console.log("below function")

//how can i called a function
// myFunction()

//how to add event on selected html element

menubar.addEventListener('click', myFunction);//when you pass a function as an argument then you don't need to add ()