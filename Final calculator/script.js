// Append value to result box
function appendValue(value) {
  document.getElementById('result').value += value;
  playClickSound();
  changeButtonColors();
}

// Clear the result box
function clearResult() {
  document.getElementById('result').value = '';
  playClickSound();
  changeButtonColors();
}

// Calculate and display result
function calculateResult() {
  let resultBox = document.getElementById('result');
  let expression = resultBox.value;
  try {
    resultBox.value = eval(expression);
    flashDisplay();
  } catch {
    resultBox.value = "Error";
    flashDisplay();
  }
  playClickSound();
  changeButtonColors();
}

// Play button click sound
function playClickSound() {
  const sound = document.getElementById("clickSound");
  sound.currentTime = 0;
  sound.play();
}

// Change button colors randomly
function changeButtonColors() {
  let buttons = document.querySelectorAll("button");
  buttons.forEach(button => {
    button.style.backgroundColor = getRandomColor();
  });
}

// Generate random color
function getRandomColor() {
  return "#" + Math.floor(Math.random() * 16777215).toString(16);
}

// Flash effect on display
function flashDisplay() {
  let resultBox = document.getElementById("result");
  resultBox.classList.add("flash");
  setTimeout(() => resultBox.classList.remove("flash"), 200);
}