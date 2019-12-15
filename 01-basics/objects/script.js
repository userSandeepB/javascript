// Object literal syntax
var rob = {
  firstName: "Rob",
  lastName: "Gelen",
  birthYear: 1990,
  family: ["Jack", "Victoria", "Emy"],
  job: "Actor",
  isMarried: false
};

// Accessing object properties
console.log(rob.firstName);
console.log(rob["lastName"]);

// Object mutatation
rob.firstName = "Robb";
rob["isMarried"] = true;

console.log(rob);

// Object using new operator
var jack = new Object();
jack.firstName = "Jack";
jack.lastName = "Gelen";
jack.birthYear = 1962;
jack["family"] = ["Victoria", "Rob", "Emy"];
jack.job = "Software Developer";
isMarried = true;

console.log(jack);
