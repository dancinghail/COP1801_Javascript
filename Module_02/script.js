// Ask the user for their first name and store it in the variable Fname
let Fname = prompt("What is your first name?");

// Display a welcome message using the user's name
alert("Hello, " + Fname + "! " + "Welcome!");

// Create a constant to store the value of Pi to 7 significant digits
const piValue = 3.1415926;

// Ask the user to input their favorite number and store it in a variable
let myFavNum = prompt("What is your favorite number?");

// Convert the input from string to a number type (in case they entered a string)
myFavNum = parseFloat(myFavNum);

// Calculate the area of a circle using the user's favorite number as the radius
let myArea = piValue * myFavNum * myFavNum; // A = πr²

// Display the calculated area
alert("The area of a circle with radius " + myFavNum + ", which is also your favorite number, is " + myArea.toFixed(2));
