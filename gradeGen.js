// Get the button element with the ID 'grade-gen-btn'
const gradeGenButton = document.querySelector('#grader-btn');

// Add a click event listener to the gradeGenButton
gradeGenButton.addEventListener('click', function() {
  const marksInput = document.querySelector('#marks');
  const nameInput = document.querySelector('#student-name');
  const marks = parseInt(marksInput.value);
  const name = nameInput.value;

  let grade = '';

  if (marks >= 79 && marks <= 100) {
    grade = 'A';
  } else if (marks >= 60 && marks <= 79) {
    grade = 'B';
  } else if (marks >= 50 && marks <= 59) {
    grade = 'C';
  } else if (marks >= 40 && marks <= 49) {
    grade = 'D';
  } else if (marks >= 0 && marks <= 39) {
    grade = 'E';
  } else {
    grade = 'Invalid';
  }

  // Create a custom alert message box
  const customAlert = document.createElement('div');
  customAlert.classList.add('custom-alert');
  customAlert.innerHTML = `
    <h2><u>GRADE RESULT</u></h2>
    <p>Student Name: ${name.toUpperCase()}</p>
    <p>Grade: ${grade}</p>
    <button onclick="this.parentNode.remove()">Close</button>
  `;

  // Append the custom alert message box to the document body
  document.body.appendChild(customAlert);
});
