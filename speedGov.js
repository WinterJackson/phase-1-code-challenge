// Get the button element with the ID 
const speedGovButton = document.querySelector('#speedgov-btn');

// Add a click event listener to the speedGovButton
speedGovButton.addEventListener('click', function() {
  const speedInput = document.querySelector('#speed');
  const regInput = document.querySelector('#vehicle-reg');
  const speed = parseInt(speedInput.value);
  const registration = regInput.value;

  const speedLimit = 70;
  const kmPerDemeritPoint = 5;
  let demeritPoints = 0;

  //Check if speed is a valid number
  if (isNaN(speed) || speed <= 0) {
    demeritPoints = 0;
  } else if (speed <= speedLimit) {
    demeritPoints = 0;
    
    // Create a custom alert message box for speed within limit
    const customAlert = document.createElement('div');
    customAlert.classList.add('custom-alert');
    customAlert.innerHTML = `
      <h2><u>SPEED DETECTOR</u></h2>
      <p>Vehicle Registration: ${registration.toUpperCase()}</p>
      <p>Your speed is within the limit. Drive safely.</p>
      <button onclick="this.parentNode.remove()">Close</button>
    `;

    // Append the custom alert message box to the document body
    document.body.appendChild(customAlert);
  } else {
    demeritPoints = Math.floor((speed - speedLimit) / kmPerDemeritPoint);
    
    // Create a custom alert message box for exceeding speed limit
    const customAlert = document.createElement('div');
    customAlert.classList.add('custom-alert');
    customAlert.innerHTML = `
      <h2><u>SPEED DETECTOR</u></h2>
      <p>Vehicle Registration: ${registration.toUpperCase()}</p>
      <p><strong>SLOW DOWN!</strong></p>
      <p>Demerit Points: ${demeritPoints}</p>
      <button onclick="this.parentNode.remove()">Close</button>
    `;

    // Append the custom alert message box to the document body
    document.body.appendChild(customAlert);

    if (demeritPoints >= 12) {
      // Create a custom alert message box for license suspension
      const customAlert = document.createElement('div');
      customAlert.classList.add('custom-alert');
      customAlert.innerHTML = `
        <h2><strong>OVER SPEEDING</strong></h2>
        <p>Vehicle Registration: ${registration.toUpperCase()}</p>
        <p><strong>LICENSE SUSPENDED!</strong></p>
        <button onclick="this.parentNode.remove()">Close</button>
      `;

      // Append the custom alert message box to the document body
      document.body.appendChild(customAlert);
    }
  }
});
