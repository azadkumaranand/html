//Async make a function return a promise

//await make a funtion wait for a promise

function sum (a, b){
    setTimeout(() => {
        return a + b;
    }, 3000);
    return "azad";
}


let myPromise = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        // resolve("Woo! your work has been done, data fetched successfully.")
        resolve(1000);
    }, 3000)
})

async function func1 (){
    console.log("hello world 1")
    
    let result = await myPromise;

    console.log(result);
    
    setTimeout(()=>{
        console.log("inside settimeout");
    }, 3000)
    console.log("hello world 2")
}

func1();