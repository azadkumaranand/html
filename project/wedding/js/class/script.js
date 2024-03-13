//use the keyword class to create a class

//Always add a method named constructor()

//constructor method automatically called when object is created 

// let mypromise = new Promise()

//class is a template for object

class Student{
    constructor(name, age, standard, id){
        // console.log("object")
        this.Studnet_name = name;
        this.Student_age = age;
        this.Student_class = standard;
        this.Student_id = id;
    }

    showdate(){
        let date = new Date();
        let day = date.getDate();
        let month = date.getMonth();
        let year = date.getFullYear();
        return `${day}/${month+1}/${year}`;
    }
    showtime(){
        let date = new Date();
        let minutes = date.getMinutes();
        let hours = date.getHours();
        return `${hours}:${minutes}`;
    }
    expiryDate(){
        let expiry_date = new Date('2025-02-14');
        let expiry_day = expiry_date.getDate();
        let expiry_month = expiry_date.getMonth();
        let eapriy_year = expiry_date.getFullYear();
        let today_date = new Date();
        let today = today_date.getDate();
        let thisMonth = today_date.getMonth();
        let thisyear = today_date.getFullYear();
        // console.log(expiry_month, thisMonth);
        if (eapriy_year>thisyear) {
            return "Product is not expired";
        }else if(eapriy_year == thisyear){
            if(expiry_month>thisMonth){
                return "Product is not expried"; 
            }else if(expiry_month==thisMonth){
                if(expiry_day>today){
                    return "Product is not expried";  
                }else{
                    return "product is expired";
                }
            }
            else{
                return "Product is expired"
            }
        }
        else{
            return "Product is exprired";
        }
    }
}

let student1 = new Student("Azad", 29, 13, 54514)
let student2 = new Student("Roushan", 25, 13, 54515);

console.log(student1.Studnet_name);
console.log(student2.Studnet_name);
console.log(student2.showdate());
console.log(student1.showtime());
console.log(student1.expiryDate());