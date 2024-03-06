console.log("hello world")

function func1(){
    console.log("hello guys");
}

function func2(){
    console.log("hello from func2");
}

//functions are execcuted in the sequence they are called. Not in the sequence they are defined

func2();
func1();

//callback function -> I will call back later.

function sum(a, b){
    return a + b;
}

function display(funcname){
    console.log("hello world what you want to display");
    // funcname() = sum();
    console.log(funcname)
    let result = funcname(10, 13);

    console.log(result);
}

display(sum);