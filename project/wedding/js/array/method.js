const arr = ['azad', 'badal', 'sultan', 'salman'];

//length property return lenth of an array

console.log(arr.length);

//convert an array to string use toString() method this method seperate array elements by comma

console.log(arr.toString());
console.log(arr)//toString() method do not change actual array
console.log(arr[3]);

const str = "suman*sanjan*ravi*suraj*aman";

//split() method is used to covert string to array 

console.log(str.split('*'));
const arr1 = str.split('*');
console.log(arr1[2].length)

const arr2 = ['azad', 'badal', 'sultan', 'salman'];

//convert array to a string use join() method seperate array element with desire character

console.log(arr2.join("-"));
console.log(arr2.join("*"));
console.log(arr2.join(`"8"`));

//push() method is used to add element in array in the last position

arr2.push("Sujraj");
arr2.push("sanjan");
arr2.push("ravi");
console.log(arr2);

//pop() method is used to remove element from array at last

arr2.pop("badal");//it will not remove badal it will remove last element of an array
arr2.pop("sds");
arr2.pop("ds");
console.log(arr2);

//shift() method is used to remove element from begening of an array

arr2.shift();
arr2.shift();
console.log(arr2);

//unshift() method is used to add element in the begening of an array
arr2.unshift("amar");
arr2.unshift("ayushman");
arr2.unshift("sudhanshu");
console.log(arr2);

//concat() method is used to add two or more array in one

console.log(arr2.concat(arr, arr1));

//splice(initial_index,delete_element, "items") method is used to add new items in array

let arr4 = ['azad', 'badal', 'sultan', 'salman'];

arr4.splice(1, 0, "Samriddhi","sakshi", "khushi");
console.log(arr4);

//slice(initital_index, end_index) method is used to slices out a piece of an array into new array

//end_index will be exclude

arr4 = ['azad', 'badal', 'sultan', 'salman', 'saurav', 'shagun'];

let arr5 = arr4.slice(1,4);
console.log(arr5);