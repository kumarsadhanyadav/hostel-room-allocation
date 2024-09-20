// student.js
document.addEventListener('DOMContentLoaded', () => {
    const studentForm = document.getElementById('studentForm');

    // Handle form submission
    studentForm.addEventListener('submit', function(e) {
        e.preventDefault();

        // Get the form data
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const gender = document.getElementById('gender').value;
        const roomType = document.getElementById('roomType').value;
        const preferences = document.getElementById('preferences').value;
        const proximity = document.getElementById('proximity').value;

        // Create a student preference object
        const studentPreference = {
            name,
            email,
            gender,
            roomType,
            preferences,
            proximity
        };

        // Store the data in localStorage (simulating backend storage)
        let studentData = localStorage.getItem('studentData');
        studentData = studentData ? JSON.parse(studentData) : [];
        studentData.push(studentPreference);

        localStorage.setItem('studentData', JSON.stringify(studentData));

        // Show confirmation message
        alert('Preferences submitted successfully!');

        // Reset the form
        studentForm.reset();
    });
});
