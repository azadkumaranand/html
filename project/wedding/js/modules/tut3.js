function message (){
    console.log("hello guys this is the function from another file");
    return 1;
}

function message2(){
    console.log("hello guys this is the another function from another file");
    return 2;
}

let subject = ['javascript', 'php', 'html', 'css', 'bootstrap'];

export {message, message2, subject};