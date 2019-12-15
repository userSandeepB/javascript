var names = ["John", "Mike", "Jane"];
var years = new Array(1990, 1948, 1969);

var john = ["John", "Smith", 1990, "teacher", false];

// Array methods and properties
john.push("Blue"); // ["John", "Smith", 1990, "teacher", false, "Blue"]
john.unshift("Mr."); // ["Mr." ,"John", "Smith", 1990, "teacher", false, "Blue"]
john.pop(); // ["Mr." ,"John", "Smith", 1990, "teacher", false]
john.shift(); // ["John", "Smith", 1990, "teacher", false, "Blue"]
console.log(john.indexOf("John")); // 0
console.log(john.indexOf("Something else")); // -1
