
// script.js
document.addEventListener('DOMContentLoaded', function() {
    const adminBtn = document.getElementById('adminRole');
    const studentBtn = document.getElementById('studentRole');
    const formContainer = document.getElementById('form-container');
    const formTitle = document.getElementById('formTitle');
    const signupLink = document.getElementById('signupLink');
    const loginForm = document.getElementById('loginForm');

    let selectedRole = ''; // Store the selected role (admin/student)

    // Function to show login/signup form
    function showForm(role) {
        selectedRole = role;
        formTitle.textContent = role === 'admin' ? 'Admin Login' : 'Student Login';
        formContainer.classList.remove('hidden');
    }

    // Admin button click event
    adminBtn.addEventListener('click', function() {
        showForm('admin');
    });

    // Student button click event
    studentBtn.addEventListener('click', function() {
        showForm('student');
    });

    // Switch to sign up form
    signupLink.addEventListener('click', function(e) {
        e.preventDefault();
        formTitle.textContent = selectedRole === 'admin' ? 'Admin Sign Up' : 'Student Sign Up';
        loginForm.querySelector('.submit-btn').textContent = 'Sign Up';
    });

    // Form submission event (login and redirect functionality)
    loginForm.addEventListener('submit', function(e) {
        e.preventDefault();
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;

        // Simulate login validation (replace this with real validation logic later)
        if (email && password) {
            if (selectedRole === 'admin') {
                // Redirect to admin dashboard
                window.location.href = 'admin-dashboard.html'; // Change this to the actual admin page
            } else if (selectedRole === 'student') {
                // Redirect to student dashboard
                window.location.href = 'student-form.html'; // Change this to the actual student page
            }
        } else {
            alert('Please enter both email and password.');
        }
    });
});
