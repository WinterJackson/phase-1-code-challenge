const grader = document.querySelector('button');
grader.addEventListener('click', function() {
  const marksInput = document.querySelector('#marks');
  const nameInput = document.querySelector('#student-name');
  const marks = parseInt(marksInput.value);
  const name = nameInput.value;
  let grade = '';

  if (marks >= 80 && marks <= 100) {
    grade = "A";
  } else if (marks >= 60 && marks <= 80) {
    grade = "B";
  } else if (marks >= 50 && marks <= 59) {
    grade = "C";
  } else if (marks >= 40 && marks <= 49) {
    grade = "D";
  } else if (marks >= 0 && marks <= 39) {
    grade = "E";
  } else {
    grade = "INVALID INPUT";
  }

  
});
