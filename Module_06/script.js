// Constructor Function
function Dog(name, show, breed, role, mySound, canTalk) {
  this.name = name;
  this.show = show;
  this.breed = breed;
  this.role = role;
  this.mySound = mySound;
  this.canTalk = canTalk;

  this.myGreeting = function () {
    let talkAbility = this.canTalk ? "I can talk!" : "I cannot talk.";
    return `Hello, my name is ${this.name}. ${this.mySound} I starred in the TV show ${this.show}. My character was a ${this.breed}. I was ${this.role} ${talkAbility}`;
  };
}

// Create Brian Griffin dog using constructor
const brian = new Dog(
  "Brian Griffin",
  "Family Guy",
  "White Labrador Retriever",
  "The Griffin family's pet and often acts as a voice of reason.",
  "When I bark, I am not scary and you probably won't find it funny.",
  true
);

// Display Brian's greeting
document.getElementById("brianOutput").innerText = brian.myGreeting();

// Create two more fictional dog objects
const scooby = new Dog(
  "Scooby-Doo",
  "Scooby-Doo, Where Are You!",
  "Great Dane",
  "A goofy, easily scared detective dog who loves snacks.",
  "Ruh-roh! I sound silly and scared.",
  true
);

const pluto = new Dog(
  "Pluto",
  "Mickey Mouse cartoons",
  "Mixed-breed bloodhound",
  "Mickey Mouse's loyal, non-speaking pet dog.",
  "I make goofy dog sounds but never speak words.",
  false
);

// Use a for...in loop to display each property of each dog
let loopOutput = "";
const allDogs = [scooby, pluto];

allDogs.forEach(dog => {
  loopOutput += `\n${dog.name}:\n`;
  for (let prop in dog) {
    if (typeof dog[prop] !== 'function') {
      loopOutput += `${prop}: ${dog[prop]}\n`;
    }
  }
  loopOutput += `\n`;
});

document.getElementById("loopOutput").innerText = loopOutput;

// Prompt user to select one of the dogs
let userChoice = prompt("Which dog do you want to learn about? Type: Scooby-Doo or Pluto");

// Normalize input
userChoice = userChoice ? userChoice.trim().toLowerCase() : "";

// Map names to objects
const dogMap = {
  "scooby-doo": scooby,
  "pluto": pluto
};

// Check if valid dog selected
if (dogMap[userChoice]) {
  const selectedDog = dogMap[userChoice];
  document.getElementById("userSelectionOutput").innerText = selectedDog.myGreeting();
} else {
  document.getElementById("userSelectionOutput").innerText = "Sorry, that dog is not in our list.";
}
