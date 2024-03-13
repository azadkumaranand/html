console.log("hello guys");

let age = [10, 15, 12, 20, 32, 41, 20, 32, 21, 24, 27];

let age2 = [];

//filter array with for loop

for (let i = 0; i < age.length; i++) {
    if (age[i]>18) {
        age2.push(age[i]);
    }
}

console.log("using loop ",age2);

//filter array using filter method

let age3 = age.filter(function(age){
    return age>18;
})

console.log("using filter method ",age3);

const employee = [
    {
        name: 'Azad',
        age: '26',
        employee_id: '415452',
        position: 'Developer',
    },
    {
        name: 'Roushan',
        age: '27',
        employee_id: '415552',
        position: 'Developer',
    },
    {
        name: 'Abhijeet',
        age: '18',
        employee_id: '415552',
        position: 'Developer',
    },
    {
        name: 'Azad',
        age: '19',
        employee_id: '415552',
        position: 'Developer',
    },
    {
        name: 'Jaiveer',
        age: '21',
        employee_id: '415552',
        position: 'Developer',
    },
    {
        name: 'Arvind',
        age: '21',
        employee_id: '415552',
        position: 'Developer',
    },
]

let employee1 = employee.filter(function(e){
    return e.name == "Azad";
})

console.log(employee1)