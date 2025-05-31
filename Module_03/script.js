const output = document.getElementById("output");

// 1. For loop from 0 to 10, check if even or odd
for (let i = 0; i <= 10; i++) {
  if (i % 2 === 0) {
    output.innerHTML += `Count ${i} is even<br>`;
  } else {
    output.innerHTML += `Count ${i} is odd<br>`;
  }
}

output.innerHTML += `<hr>`;

// 2. Ask user for number between 5 and 20, use do-while loop
let myNum;
do {
  myNum = parseInt(prompt("Enter a number between 5 and 20:"));
} while (isNaN(myNum) || myNum < 5 || myNum > 20);

let counter = 1;
do {
  output.innerHTML += `Counter: ${counter}<br>`;
  counter++;
} while (counter <= myNum);

output.innerHTML += `<hr>`;

// 3. Subjects array
const subjects = ["Accounting", "Algebra", "Programming", "Art", "Data Analytics"];

// Display using forEach
output.innerHTML += `<strong>Subjects </strong><br>`;
subjects.forEach(subject => {
  output.innerHTML += `${subject}<br>`;
});

output.innerHTML += `<hr>`;

// Display with commas
output.innerHTML += `<strong>Subjects </strong><br>`;
output.innerHTML += subjects.join(", ");
