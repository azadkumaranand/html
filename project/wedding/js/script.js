// console.log("hello wolrd inside script file");
//variable is a container whcih store the information
let varName = 'azad';
let age = 30;
let info = "hello world my name is azad kumar";
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
    // console.log(navlinks.style.display == "");
    // console.log(navlinks.style.display == "none" )
    // console.log(navlinks.style.display == "")
    // console.log(navlinks.style.display == "none" || navlinks.style.display == "")
    //syntax of if
    /*

    if(condition){
        //your code which will execute when codition is true
    }else{
        //your code which will execute when codition is false
    }
    
    */
    if(navlinks.style.display == "none" || navlinks.style.display == ""){
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

//change tab html content content on click

let tabcards = document.getElementById("tabcards");
let groomside = document.getElementById('groomside');
let brideside = document.querySelector('#brideside');
let image1 = document.getElementById('image1');
let closepopup = document.getElementById('closepopup');
let popupcontainer = document.getElementById('popupcontainer');
// let gallery_imeages = document.querySelector('p');
// let gallery_imeages = document.querySelectorAll('p');
let gallery_imeages = document.querySelectorAll('.gallery_img');
console.log("select type: ", typeof(gallery_imeages));

//open modal funciton

function openmodal(imgsrc, width, height){
    console.log("openmodal func", imgsrc, width);
    let popupimage = document.querySelector('.popupimg img');
    // console.log(popupimage);
    popupimage.src = imgsrc;
    // if(width=='600px'){
    //     console.log("true width")
    //     popupimage.style.width=width;
    // }
    if(width!=''){
        console.log("true width")
        popupimage.style.width=width;
    }
    // popupimage.width = width;
    // popupimage.height = height;

    popupcontainer.style.display = "block";
    popupcontainer.style.overflow = "hidden";
}
console.log(gallery_imeages[2]);

//bad approach

// gallery_imeages[1].addEventListener('click', function(){

// })
//open image popup using array and foreach
gallery_imeages.forEach(function(e){
    e.addEventListener('click', function(element){
        let imgTag = element.target;
        let imgSrc = imgTag.src;
        let width;
        let height;
        console.log(imgTag.className);
        if(imgTag.className=="smallImg"){
            width='700px';
        }
        openmodal(imgSrc, width, height);
    })
})

brideside.addEventListener('click', function(){
    tabcards.innerHTML = `
    <div class="tabcard">
        <div class="tabimg">
            <img src="https://www.tooplate.com/templates/2131_wedding_lite/images/people/lifestyle-people-emotions-casual-concept.jpg" alt="">
        </div>
        <div class="card-content">
            <div>
                <p class="card-title" style="margin: 0;">
                    Kevin <span>COUSIN</span>
                </p>
                <p class="card-desc">
                    Wedding Lite is free HTML template provided by Tooplate website. It is based on Bootstrap v5.1.3 CSS layout. You are free to use it for your wedding.
                </p>
            </div>
        </div>
    </div>
    <div class="tabcard">
        <div class="tabimg">
            <img src="https://www.tooplate.com/templates/2131_wedding_lite/images/people/portrait-beautiful-young-woman-standing-grey-wall.jpg" alt="">
        </div>
        <div class="card-content">
            <div>
                <p class="card-title" style="margin: 0;">
                    Wilson <span>BEST FRIEND                                        </span>
                </p>
                <p class="card-desc">
                    Feel free to make a PayPal contribution to contact [at] tooplate.com to support the open community of free HTML templates. Thank you.
                </p>
            </div>
        </div>
    </div>
`;
})
groomside.addEventListener('click', function(){
    tabcards.innerHTML = `
    <div class="tabcard">
        <div class="tabimg">
            <img src="https://www.tooplate.com/templates/2131_wedding_lite/images/people/attractive-laughing-guy-having-fun-smiling-happy.jpg" alt="">
        </div>
        <div class="card-content">
            <div>
                <p class="card-title" style="margin: 0;">
                    Kevin <span>COUSIN</span>
                </p>
                <p class="card-desc">
                    Wedding Lite is free HTML template provided by Tooplate website. It is based on Bootstrap v5.1.3 CSS layout. You are free to use it for your wedding.
                </p>
            </div>
        </div>
    </div>
    <div class="tabcard">
        <div class="tabimg">
            <img src="https://www.tooplate.com/templates/2131_wedding_lite/images/people/portrait-handsome-attractive-young-man-posing.jpg" alt="">
        </div>
        <div class="card-content">
            <div>
                <p class="card-title" style="margin: 0;">
                    Wilson <span>BEST FRIEND                                        </span>
                </p>
                <p class="card-desc">
                    Feel free to make a PayPal contribution to contact [at] tooplate.com to support the open community of free HTML templates. Thank you.
                </p>
            </div>
        </div>
    </div>
    `;
})
// alert("hello world")
image1.addEventListener('click', function(){
    
})

closepopup.addEventListener('click', function(){
    popupcontainer.style.display = "none";
})