// Get the button element with the ID 'speedgov-btn'
const speedTest = document.querySelector("#speedgov-btn"); 

// Add a click event listener to the speedTest button and define an anonymous function to handle the click event
speedTest.addEventListener('click', function () { 
  // Get the input element for the speed
  const speedInput = document.querySelector("#speed"); 

  // Get the value of the speed input and convert it to an integer
  const speed = parseInt(speedInput.value); 
  
  // Set the speed limit to 70 km/h
  const speedLimit = 70; 

  // Set the number of kilometers per demerit point
  const kmPerDemeritPoint = 5; 

  // Initialize the demerit points variable
  let demeritPoints = 0; 

  // Get the input element for the vehicle registration
  const vehicleRegistrationInput = document.querySelector("#vehicle-reg"); 

  // Get the value of the vehicle registration input
  const vehicleRegistration = vehicleRegistrationInput.value; 

  if (speed <= speedLimit) {
    // Display an alert showing that the speed is within the limit
    alert(`Vehicle Registration: ${vehicleRegistration.toUpperCase()}\n"Your Speed is Ok"`); 
  } else {
    // Calculate the demerit points based on the speed exceeding the speed limit
    demeritPoints = Math.floor((speed - speedLimit) / kmPerDemeritPoint); 

    // Display an alert indicating the need to slow down and the number of demerit points
    alert(`SLOW DOWN!
    Vehicle Registration: ${vehicleRegistration.toUpperCase()}
    Demerit Points: ${demeritPoints}`); 

    if (demeritPoints >= 12) {
      // Display an alert indicating that the license is suspended if the demerit points reach or exceed 12
      alert(`Vehicle Registration: ${vehicleRegistration.toUpperCase()}\n"License suspended"`); 
    }
  }
});

