// Get the button element with the tag name 'button'
const grader = document.querySelector('button'); 

// Add event listener to the grader button and define an anonymous function to be executed when clicked
grader.addEventListener('click', function() { 
  // Get the input element for marks  
  const marksInput = document.querySelector('#marks'); 

  // Get the input element for the student name
  const nameInput = document.querySelector('#student-name'); 

  // Get the value of the marks input and convert it to an integer using parseInt()
  const marks = parseInt(marksInput.value); 

  // Get the value of the student name input
  const name = nameInput.value; 

  // Initialize an empty string for the grade
  let grade = ''; 

  // Determine the grade based on the marks
  if (marks >= 79 && marks <= 100) {
    grade = "A";
  } else if (marks >= 60 && marks <= 79) {
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

  // Display the student name and grade in an alert
  alert(`Student: ${name}\nGrade: ${grade}`); 
});
