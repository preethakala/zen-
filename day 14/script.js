// Get references to the form and the table
const dataForm = document.getElementById('dataForm');
const nameInput = document.getElementById('name');
const ageInput = document.getElementById('age');
const emailInput = document.getElementById('email');
const dataTable = document.getElementById('dataTable').getElementsByTagName('tbody')[0];

// Event listener for form submission
dataForm.addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting and refreshing the page

    // Get values from the form inputs
    const name = nameInput.value;
    const age = ageInput.value;
    const email = emailInput.value;

    // Create a new row in the table
    const newRow = dataTable.insertRow();

    // Insert new cells with data
    const cell1 = newRow.insertCell(0);
    const cell2 = newRow.insertCell(1);
    const cell3 = newRow.insertCell(2);

    // Set the text for each cell
    cell1.textContent = name;
    cell2.textContent = age;
    cell3.textContent = email;

    // Clear the form inputs after submission
    nameInput.value = '';
    ageInput.value = '';
    emailInput.value = '';
});
