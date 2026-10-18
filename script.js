const checkboxes = document.querySelectorAll(".task-checkbox");
const progressText = document.getElementById("progress-text");
const progressBar = document.getElementById("progress-bar");
const progressFill = document.getElementById("progress-fill");
const resetButton = document.getElementById("reset-button");
const message = document.getElementById("checklist-message");

function updateProgress() {
  const completed = document.querySelectorAll(".task-checkbox:checked").length;
  const total = checkboxes.length;

  progressText.textContent = `${completed} of ${total} completed`;
  progressFill.style.width = `${total === 0 ? 0 : (completed / total) * 100}%`;
  progressBar.setAttribute("aria-valuemax", String(total));
  progressBar.setAttribute("aria-valuenow", String(completed));

  if (completed === total) {
    message.textContent = "Great work! You have checked every item on this demonstration checklist.";
  } else if (completed > 0) {
    message.textContent = "Good start. Keep preparing the remaining items.";
  } else {
    message.textContent = "Check items as you prepare them.";
  }
}

checkboxes.forEach((checkbox) => {
  checkbox.addEventListener("change", updateProgress);
});

resetButton.addEventListener("click", () => {
  checkboxes.forEach((checkbox) => {
    checkbox.checked = false;
  });
  updateProgress();
});

updateProgress();
