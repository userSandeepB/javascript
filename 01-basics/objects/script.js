// 01. Object literal
var peter = {
  firstName: "Peter",
  lastName: "Smith",
  birthYear: 2013,
  family: ["Jack", "Jane"]
};

// 02. Using new keyword
var jack = new Object();
jack.firstName = "Jack"; // dot notation
jack.birthYear = 1990;
jack.family = ["Jane", "Peter"];
jack["lastName"] = "Smith"; // bracket notation
