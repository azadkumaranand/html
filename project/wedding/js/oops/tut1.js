//classes are templates for javascript objects

class Car{
    constructor(n, c, p){
        this.name = n;
        this.color = c;
        this.price = p;
    }
    getcarname() {
        console.log(this.name);
    }
}

const bmw = new Car("BMW", "black", 7800000000);
// bmw.setvlues();

console.log(bmw.price);
console.log(bmw.getcarname());

const volvo = new Car("Volvo", "brown", 8320041);

console.log(volvo.color);