//Async make a function return a promise

//await make a funtio wait for a promise

function sum (a, b){
    setTimeout(() => {
        return a + b;
    }, 3000);
    return "azad";
}

async function func1 (){
    console.log("hello world 1")
    
    let result = await sum(12, 15);

    console.log(result);
    
    setTimeout(()=>{
        console.log("inside settimeout");
    }, 3000)
    console.log("hello world 2")
}

func1();