const employeeName = document.querySelector("#employee-name");
const basicSalaryInput = document.querySelector("#basic-salary");
const payeeCalc = document.querySelector("#paye-btn");
const nhifCalc = document.querySelector("#nhif-btn");
const nssfCalc = document.querySelector("#nssf-btn");
const netSalaryCalc = document.querySelector("#netSalary-btn");
const basicSalary = parseInt(basicSalaryInput.value);

function calculatePayeeTax(basicSalary) {
    // Define the constant for personal relief
    const personalRelief = 2800; 

    // Calculate the taxable pay by subtracting personal relief from basic salary
    const taxablePay = basicSalary - personalRelief; 

    // Initialize the variable to store the calculated payee tax
    let payeeTax = 0; 
  
    // Calculate the taxable pay against given levels to determine the applicable tax rate
    if (taxablePay > 0 && taxablePay <= 24000) {
      payeeTax = taxablePay * 0.1; 
    } else if (taxablePay > 24000 && taxablePay <= 32333) {
      payeeTax = taxablePay * 0.25; 
    } else if (taxablePay > 32333) {
      payeeTax = taxablePay * 0.3; 
    } else {
      payeeTax = 0; 
    }
  
    // Return the calculated payee tax
    return payeeTax; 
  }
  
function calculateNHIFDeduction(basicSalary) {
  // Check if basicSalary is a valid number
  if (isNaN(basicSalary) || basicSalary <= 0) {
    return 0; 
  }

  let nhifDeduction = 0;

  // Check the basicSalary range and assign the correct nhifDeduction value
  if (basicSalary <= 5999) {
    nhifDeduction = 150;
  } else if (basicSalary <= 7999) {
    nhifDeduction = 300;
  } else if (basicSalary <= 11999) {
    nhifDeduction = 400;
  } else if (basicSalary <= 14999) {
    nhifDeduction = 500;
  } else if (basicSalary <= 19999) {
    nhifDeduction = 600;
  } else if (basicSalary <= 24999) {
    nhifDeduction = 750;
  } else if (basicSalary <= 29999) {
    nhifDeduction = 850;
  } else if (basicSalary <= 34999) {
    nhifDeduction = 900;
  } else if (basicSalary <= 39999) {
    nhifDeduction = 950;
  } else if (basicSalary <= 44999) {
    nhifDeduction = 1000;
  } else if (basicSalary <= 49999) {
    nhifDeduction = 1100;
  } else if (basicSalary <= 59999) {
    nhifDeduction = 1200;
  } else if (basicSalary <= 69999) {
    nhifDeduction = 1300;
  } else if (basicSalary <= 79999) {
    nhifDeduction = 1400;
  } else if (basicSalary <= 89999) {
    nhifDeduction = 1500;
  } else if (basicSalary <= 99999) {
    nhifDeduction = 1600;
  } else {
    nhifDeduction = 1700;
  }
  return nhifDeduction;
}

function calculateNSSFContribution(basicSalary) {
    // Check if basicSalary is a valid number
    if (isNaN(basicSalary) || basicSalary <= 0) {
      return {
        employeeContribution: 0,
        employerContribution: 0
      }; 
    }

    // Check if the basicSalary exceeds the pensionable limit of 18000
    // If it does, set the pensionablePay to 18000, otherwise use the basicSalary 
    let pensionablePay;
    if (basicSalary > 18000) {
      pensionablePay = 18000;
    } else {
      pensionablePay = basicSalary;
    }
  
    // Calculate the employee's contribution as 6% of the pensionablePay
    const employeeContribution = pensionablePay * 0.06;
  
    // The employer's contribution is the same as the employee's contribution
    const employerContribution = employeeContribution;
  
    // Return an object containing the calculated contributions
    return {
      employeeContribution: employeeContribution,
      employerContribution: employerContribution
    };
  }  

function calculateNetSalary() {
    // Get the basic salary value from the input field and convert it to an integer
    const basicSalary = parseInt(basicSalaryInput.value);

    // Calculate the payee tax based on the basic salary
    const payeeTax = calculatePayeeTax(basicSalary);
  
    // Calculate the NHIF deduction based on the basic salary
    const nhifDeduction = calculateNHIFDeduction(basicSalary);
  
    // Calculate the NSSF employee contribution based on the basic salary
    const { employeeContribution } = calculateNSSFContribution(basicSalary);
  
    // Calculate the total deductions 
    const deductions = payeeTax + nhifDeduction + employeeContribution;
  
    // Calculate the Net salary 
    const netSalary = basicSalary - deductions;
  
    // Return an object containing the employee name and net salary
    return {
      employeeName: employeeName.value,
      netSalary: netSalary
    };
  }
  
  payeeCalc.addEventListener("click", function() {
    // Retrieve the value of basicSalaryInput and convert it to an integer
    const basicSalary = parseInt(basicSalaryInput.value);
  
    // Call the calculatePayeeTax function passing the basicSalary as an argument
    const payeeTax = calculatePayeeTax(basicSalary);
  
    // Create a custom alert message box
    const customAlert = document.createElement('div');
    customAlert.classList.add('custom-alert');
    customAlert.innerHTML = `
      <h2><u>PAYEE TAX</u> </h2>
      <p>Employee Name: ${employeeName.value}</p>
      <p>Payee Tax: <strong>KSH ${Math.floor(payeeTax)}</strong></p>
      <button onclick="this.parentNode.remove()">Close</button>
    `;

    // Append the custom alert message box to the document body
    document.body.appendChild(customAlert);
});
  
  nhifCalc.addEventListener("click", function() {
    // Retrieve the basicSalary value from the input field and convert it to an integer
    const basicSalary = parseInt(basicSalaryInput.value);
  
    // Call the calculateNHIFDeduction function with the basicSalary as an argument
    const nhifDeduction = calculateNHIFDeduction(basicSalary);
  
    // Create a custom alert message box
    const customAlert = document.createElement('div');
    customAlert.classList.add('custom-alert');
    customAlert.innerHTML = `
      <h2><u>NHIF DEDUCTION</u> </h2>
      <p>Employee Name: ${employeeName.value}</p>
      <p>NHIF Deduction: <strong>KSH ${Math.floor(nhifDeduction)}</strong></p>
      <button onclick="this.parentNode.remove()">Close</button>
    `;

    // Append the custom alert message box to the document body
    document.body.appendChild(customAlert);
});
  
  nssfCalc.addEventListener("click", function() {
    // Retrieve the basic salary from the input field and convert it to an integer
    const basicSalary = parseInt(basicSalaryInput.value);
  
    // Call the calculateNSSFContribution function with the basicSalary as an argument
    const { employeeContribution } = calculateNSSFContribution(basicSalary);
  
    // Create a custom alert message box
    const customAlert = document.createElement('div');
    customAlert.classList.add('custom-alert');
    customAlert.innerHTML = `
      <h2><u>NSSF CONTRIBUTION</u> </h2>
      <p>Employee Name: ${employeeName.value}</p>
      <p>NSSF Contribution: <strong>KSH ${Math.floor(employeeContribution)}</strong></p>
      <button onclick="this.parentNode.remove()">Close</button>
    `;

    // Append the custom alert message box to the document body
    document.body.appendChild(customAlert);
});
  
  netSalaryCalc.addEventListener("click", calculateNetSalary); 

  // Calculate Net salary
  function calculateNetSalary() {
    const basicSalaryInput = document.querySelector("#basic-salary"); 
    const basicSalary = parseInt(basicSalaryInput.value); 
  
    // Call the previously defined functions to calculate the various deductions and contributions
    const payeeTax = calculatePayeeTax(basicSalary);
    const nhifDeduction = calculateNHIFDeduction(basicSalary);
    const nssfContributions = calculateNSSFContribution(basicSalary);
  
    // Calculate the total deductions
    const deductions = payeeTax + nhifDeduction + nssfContributions.employeeContribution; 
    // Calculate the Net salary
    const netSalary = basicSalary - deductions; 

    // Create a custom alert message box
    const customAlert = document.createElement('div');
    customAlert.classList.add('custom-alert');
    customAlert.innerHTML = `
      <h2><u>NET SALARY</u></h2>
      <p>Employee Name: ${employeeName.value}</p>
      <p>Net Salary: <strong>KSH ${Math.floor(netSalary)}</strong></p>
      <button onclick="this.parentNode.remove()">Close</button>
    `;

    // Append the custom alert message box to the document body
    document.body.appendChild(customAlert);
  }
  