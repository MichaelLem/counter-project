let count = 0;
let savedTotal = 0;

const incrementBtn = document.getElementById("increment-btn");
const resetBtn = document.getElementById("reset-btn");
const saveBtn = document.getElementById("save-btn");
const restartBtn = document.getElementById("restart-btn");

let countDisplay = document.getElementById("count");
let savedCount = document.getElementById("saved-count");

function increment() {
  count += 1;
  countDisplay.textContent = count;
}
function reset() {
  count = 0;
  countDisplay.textContent = count;
}
function save() {
  savedTotal += count;
  savedCount.textContent = "Saved: " + savedTotal;
  count = 0;
  countDisplay.textContent = count;
}
function restart() {
  count = 0;
  savedTotal = 0;
  countDisplay.textContent = count;
  savedCount.textContent = "Saved: " + savedTotal;
}

incrementBtn.addEventListener("click", increment);
resetBtn.addEventListener("click", reset);
saveBtn.addEventListener("click", save);
restartBtn.addEventListener("click", restart);
