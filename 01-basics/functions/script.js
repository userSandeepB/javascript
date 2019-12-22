// 01. Function Declaration
function calcAge(birthYear) {
  return 2019 - birthYear;
}

// 02. Function Expression
var isAdult = function(birthYear) {
  var age = calcAge(birthYear);
  return age >= 18 ? true : false;
};

console.log(isAdult(2013));
