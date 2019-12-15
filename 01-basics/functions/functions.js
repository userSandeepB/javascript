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
