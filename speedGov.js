const speedTest = document.querySelector("#speedgov-btn");
speedTest.addEventListener('click', function () {
  const speedInput = document.querySelector("#speed");
  const speed = parseInt(speedInput.value);
  const speedLimit = 70;
  const kmPerDemeritPoint = 5;
  let demeritPoints = 0;
  
  const vehicleRegistrationInput = document.querySelector("#vehicle-reg");
  const vehicleRegistration = vehicleRegistrationInput.value;

  if (speed <= speedLimit) {
    alert(`Vehicle Registration: ${vehicleRegistration.toUpperCase()}\n"Your Speed is Ok"`);
  } else {
    demeritPoints = Math.floor((speed - speedLimit) / kmPerDemeritPoint);
    alert(`SLOW DOWN!
    Vehicle Registration: ${vehicleRegistration.toUpperCase()}
    Demerit Points: ${demeritPoints}`);

    if (demeritPoints >= 12) {
      alert(`Vehicle Registration: ${vehicleRegistration.toUpperCase()}\n"License suspended"`);
    }
  }
});