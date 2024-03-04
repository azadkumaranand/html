
// try, catch, throw,
let x = 100;
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
    console.log(`error message ${err}`);
}

let a = 100;
let b = 1;

console.log(a/b);

try{
    if(b==0){
        throw "value of b should not be 0";
    }
    console.log("after throw");
    console.log(a/b);
}
catch(err){
    console.log(err);
}
finally{
    console.log("object");
}

//ajax
//all about API


