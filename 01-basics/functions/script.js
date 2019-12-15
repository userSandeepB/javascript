// Function Statement or Declaration
function calculateAge(birthYear) {
  return 2019 - birthYear;
}

function yearsUntilRetirement(birthYear, firstName) {
  var age = calculateAge(birthYear);
  var retirement = 65 - age;
  if (retirement > 0) {
    console.log(firstName + " retires in " + (65 - age) + " years.");
  } else {
    console.log(firstName + " is already retired.");
  }
}

yearsUntilRetirement(1990, "John");
yearsUntilRetirement(1948, "Mike");
yearsUntilRetirement(1969, "Jane");

// Function Expression
var whatDoYouDo = function(job, firstName) {
  switch (job) {
    case "teacher":
      return firstName + " teaches kid how to code.";
    case "driver":
      return firstName + " drives a cab in Delhi";
    case "designer":
      return firstName + " design beautiful website";
    default:
      return firstName + " does something else";
  }
};

console.log(whatDoYouDo("teacher", "John"));
console.log(whatDoYouDo("designer", "Jane"));
console.log(whatDoYouDo("retired", "Mike"));
