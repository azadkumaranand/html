const name = "Azad Kumar";

//how to find length of a string

//lenth property of string

console.log(name.length);

//charAt(position) method is used to find charter at specific position

console.log(name.charAt(2));

console.log(name[2]);

//Extracting string parts

//slice(start_position, end_position+1) method is used to extract a specific part of string

console.log(name.slice(5,10));//end position will be exclude

//substr(start_position, length) method is used to extract a specific part of string

console.log(name.substr(5, 5));

//change uppercase or lowercase

//toUpperCase() method is used to convert lower string to upper(capital);

console.log(name.toUpperCase());

//toLowerCase() method is used to convert upper string to lower(small);

console.log(name.toLowerCase());

//concat() method is used for adding two or more string in one

let name1 = "Gaurav";
let name2 = "Arvind";
let name3 = "Abhijeet";
let name4 = "Banti";

console.log(name1.concat(" ", name2, " ", name3, " ", name4));

//trim() method is used to remove whitespace from both sides of a string

let str = "    jhghjbk    ";
console.log(str);
console.log(str.trim());

//trimStart() method is used to remove whitespace from begining

let str1 = "    jhghjbk    ";

console.log(str1.trimStart());

//trimEnd() method is used to remove whitespace from begining

let str2 = "    jhghjbk    ";

console.log(str2.trimEnd());


//padStart(length, "paddwith") method is used to pads a string from the start

let num = "8754";
console.log(num.padStart(12, "X"));
console.log(num.padStart(12, "*"));
//padEnd(length, "paddwith")
console.log(num.padEnd(12, "*"));

//replace("string_value", "new_value") method is used for replaces a specified value with another value in  a string

let intro = "Hello guys my name is azad kumar";

console.log(intro.replace("azad", "sonu"));

//split("split_character") method is used to convert a string to an array

let students = "Azad-Sonu-Suman-Ponung-Amit-Suraj";
console.log(students.split('-'));
