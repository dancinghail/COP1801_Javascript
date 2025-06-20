// ----- Object Literal: myDog -----
const myDog = {
  name: "Brian Griffin",
  show: "Family Guy",
  breed: "White Labrador Retriever",
  role: "The Griffin family's pet and often acts as a voice of reason.",
  mySound: "When I bark, I am not scary and you probably won't find it funny."
};

// Display myDog's information
const literalMessage = `Hello, my name is ${myDog.name}. ${myDog.mySound} I starred in the TV show ${myDog.show}. My character was a ${myDog.breed}. I was ${myDog.role}`;
document.getElementById("literalOutput").innerText = literalMessage;

// ----- Constructor Function: Dog -----
function Dog(name, show, breed, role, mySound, canTalk) {
  this.name = name;
  this.show = show;
  this.breed = breed;
  this.role = role;
  this.mySound = mySound;
  this.canTalk = canTalk;

  this.myGreeting = function () {
    return `Hello, my name is ${this.name}. ${this.mySound} I starred in the TV show ${this.show}. My character was a ${this.breed}. I was ${this.role} Can I talk? ${this.canTalk ? "Yes, I can." : "No, I can't."}`;
  };
}

// Create an instance of Dog using the constructor
const myDogConst = new Dog(
  "Brian Griffin",
  "Family Guy",
  "White Labrador Retriever",
  "The Griffin family's pet and often acts as a voice of reason.",
  "When I bark, I am not scary and you probably won't find it funny.",
  true
);

// Display myDogConst's greeting
document.getElementById("constructorOutput").innerText = myDogConst.myGreeting();
