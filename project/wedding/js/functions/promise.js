//I promise a result.

//promise object

let promisebycode = new Promise(function(resolve, reject){
    let a = 10;
    if (a==12) {
        resolve('your value is good');
    }else{
        reject('your value is rejeted');
    }
})

promisebycode.then(
    function(val){
        console.log(val)
    },
    function(error){
        console.log(error)
    }
)



let myPromise = new Promise((resolve, reject)=>{
    // resolve();//when successful
    // reject();//when not successful
    let price = 5000;
    if(price =resolve= 2000){
        resolve("Ok Done!")
    }else{
        reject("You are not a good person!")
    }
})

myPromise.then(
    function(value){
        console.log(value);
    },
    function(error){
        console.log(error);
    }
)


let newPromise = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        ("I am a good person.")
    }, 3000)
})

newPromise.then(
    function(val){
        console.log(val);
    },
    function(error){

    }
)