// Get the toggle button and cancel button
var toggleButton = document.getElementById("toggle-button");
var cancelButton = document.getElementById("cancel-button");

// Set a flag to track if the automatic toggle is on
var isAutoToggling = false;

// Add an event listener to the toggle button
toggleButton.addEventListener("click", function () {
  // If the automatic toggle is on, turn it off
  if (isAutoToggling) {
    isAutoToggling = false;
    cancelButton.style.display = "none";
    clearInterval(intervalId);
  }
  // If the automatic toggle is off, turn it on
  else {
    isAutoToggling = true;
    cancelButton.style.display = "inline";
    intervalId = setInterval(toggleBackground, 1000);
  }
});

// Add an event listener to the cancel button
cancelButton.addEventListener("click", function () {
  isAutoToggling = false;
  cancelButton.style.display = "none";
  clearInterval(intervalId);
});

// Function to toggle the background color
function toggleBackground() {
  if (document.body.style.backgroundColor === "white") {
    document.body.style.backgroundColor = "black";
  } else {
    document.body.style.backgroundColor = "white";
  }
}
