// Generate the addition problem
let number1 = Math.floor(Math.random() * 10) + 1;
let number2 = Math.floor(Math.random() * 10) + 1;
let result = number1 + number2;

document.querySelector(".number1").textContent = number1;
document.querySelector(".number2").textContent = number2;
document.querySelector(".result").textContent = "?";

// Create the draggable numbers
let dragNumbers = document.querySelectorAll(".drag-container .number");

dragNumbers.forEach((dragNumber) => {
  dragNumber.draggable = true;

  dragNumber.addEventListener("dragstart", (event) => {
    event.dataTransfer.setData("text/plain", event.target.textContent);
  });
});

// Add event listener to the result container to handle the drop event
let resultContainer = document.querySelector(".result");

resultContainer.addEventListener("dragover", (event) => {
  event.preventDefault();
});

resultContainer.addEventListener("drop", (event) => {
  event.preventDefault();
  let draggedNumber = event.dataTransfer.getData("text/plain");

  if (parseInt(draggedNumber) === result) {
    resultContainer.textContent = draggedNumber;
    alert("Correct!");
  } else {
    alert("Incorrect!");
  }
});
