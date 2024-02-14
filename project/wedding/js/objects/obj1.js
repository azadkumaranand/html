let flower = {
    type:"rose",
    color:"pink",
    smell:"good",
    aboutflower: function(){
        return `I have a ${this.type} of ${this.color} color and smell is ${this.smell}`;
    }
}
//this keyword represent current object

console.log(flower['type']);
console.log(flower.type);
console.log(flower.aboutflower());