
// try, catch, throw,
let x = 105;
console.log("hello error");
try{
    // console.log(typeof(x) == 'undefined');
    if(typeof(x) !== "number"){
        throw "value of x should be a number";
    }else if(x<10){
        throw "value of x should be greater than 10";
    }else if(x>100){
        throw "value of x should be less than 100";
    }else{
        console.log(x+34);
    }

}
catch(err){
    console.log(err);
}

//ajax
//all about API


