// admin.js
document.addEventListener('DOMContentLoaded', () => {
    const studentDataContainer = document.getElementById('studentDataContainer');

    // Retrieve student data from localStorage
    const studentData = JSON.parse(localStorage.getItem('studentData')) || [];

    // Display student data
    if (studentData.length > 0) {
        studentData.forEach((student, index) => {
            const studentDiv = document.createElement('div');
            studentDiv.classList.add('student-info');
            studentDiv.innerHTML = `
                <h3>Student ${index + 1}</h3>
                <p><strong>Name:</strong> ${student.name}</p>
                <p><strong>Email:</strong> ${student.email}</p>
                <p><strong>Gender:</strong> ${student.gender}</p>
                <p><strong>Room Type:</strong> ${student.roomType}</p>
                <p><strong>Preferences:</strong> ${student.preferences}</p>
                <p><strong>Proximity to Academic Buildings:</strong> ${student.proximity}</p>
                <hr>
            `;
            studentDataContainer.appendChild(studentDiv);
        });
    } else {
        studentDataContainer.innerHTML = '<p>No student data available.</p>';
    }
});
