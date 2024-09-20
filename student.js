// student.js
document.addEventListener('DOMContentLoaded', () => {
    const studentForm = document.getElementById('studentForm');

    // Function to generate a random room number
    function generateRoomNumber() {
        const floor = Math.floor(Math.random() * 5) + 1; // Random floor number (1 to 5)
        const room = Math.floor(Math.random() * 50) + 1; // Random room number (1 to 100)
        return `${floor}-${room}`; // Example room format: "3-45" (3rd floor, room 45)
    }

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

        // Generate a random room number
        const roomNumber = generateRoomNumber();

        // Create a student preference object
        const studentPreference = {
            name,
            email,
            gender,
            roomType,
            preferences,
            proximity,
            roomNumber // Add room number to student data
        };

        // Store the data in localStorage (simulating backend storage)
        let studentData = localStorage.getItem('studentData');
        studentData = studentData ? JSON.parse(studentData) : [];
        studentData.push(studentPreference);

        localStorage.setItem('studentData', JSON.stringify(studentData));

        // Show confirmation message
        alert(`Preferences submitted successfully! Your allocated room number is ${roomNumber}`);

        // Reset the form
        studentForm.reset();
    });
});
