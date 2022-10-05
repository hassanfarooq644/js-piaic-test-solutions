// Hassan Farooq

//Question 3 : Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, and titlecase.

function titleCase(str) {
  str = str.toLowerCase().split(' ');
  for (var i = 0; i < str.length; i++) {
    str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1);
  }
  return str.join(' ');
}

var person = "Hassan Farooq"
console.log("Lower Case: " + person.toLowerCase())
console.log("Upper Case: " + person.toUpperCase())
console.log("Upper Case: " + titleCase(person))

// Question 9 : Favorite Number: Store your favorite number in a variable. Then, using that variable, create a message that reveals your favorite number. Print that message.

var favoriteNumber = 9;
console.log(`My Favorate Number is ${favoriteNumber}`);