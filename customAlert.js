function createCustomAlert() {
    // Create a custom alert container element
    const customAlertContainer = document.createElement('div');
    customAlertContainer.classList.add('custom-alert');
  
    // Create a custom alert message element
    const customAlertMessage = document.createElement('div');
    customAlertMessage.classList.add('custom-alert-message');
    customAlertMessage.innerHTML = `
      <h2></h2>
      <p></p>
      <button>Close</button>
    `;
  
    // Append the custom alert message element to the custom alert container
    customAlertContainer.appendChild(customAlertMessage);
  
    // Add event listener to the close button
    const closeButton = customAlertMessage.querySelector('button');
    closeButton.addEventListener('click', () => {
      customAlertContainer.remove();
    });
  
    // Function to set the content of the custom alert message
    function setCustomAlertContent(title, content) {
      const alertTitle = customAlertMessage.querySelector('h2');
      const alertContent = customAlertMessage.querySelector('p');
  
      alertTitle.textContent = title;
      alertContent.textContent = content;
    }
  
    // Function to show the custom alert
    function showCustomAlert() {
      document.body.appendChild(customAlertContainer);
    }
  
    // Function to hide the custom alert
    function hideCustomAlert() {
      customAlertContainer.remove();
    }
  
    // Return the custom alert functions
    return {
      setCustomAlertContent,
      showCustomAlert,
      hideCustomAlert
    };
  }
  
  const customAlert = createCustomAlert();
  