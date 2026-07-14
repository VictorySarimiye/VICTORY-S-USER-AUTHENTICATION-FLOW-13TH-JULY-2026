const loginForm = document.getElementById('loginForm');
const errorAlert = document.getElementById('error-alert');

loginForm.addEventListener('submit', function handleSubmit(e) {
    // STEP 3: Prevent Default form refresh
    e.preventDefault();

    // Extract values
    const username = document.getElementById('username').value.trim();
    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value;

    // Hide previous error messages
    errorAlert.style.display = 'none';
    errorAlert.textContent = '';

    // STEP 4: Validation Checks
    // CHECK 1: Username Length
    if (username.length <= 8) {
        showError("username is less than 8 characters");
        return; // Stops execution
    }

    // CHECK 2: Password Length
    if (password.length < 6) {
        showError("Password length is less than required");
        return; // Stops execution
    }

    // STEP 5: Store Data in sessionStorage
    sessionStorage.setItem('username', username);
    sessionStorage.setItem('email', email);

    // STEP 6: Navigate to Home
    window.location.href = "index.html";
});

function showError(message) {
    errorAlert.textContent = message;
    errorAlert.style.display = 'block';
}