// Run automatically when DOM is ready (STEP 7)
document.addEventListener('DOMContentLoaded', setUserValues);

function setUserValues() {
    // STEP 8: Retrieve Session Data
    const storedUsername = sessionStorage.getItem('username');
    const storedEmail = sessionStorage.getItem('email');

    const usernameElement = document.getElementById('username-display');
    const emailElement = document.getElementById('email-display');

    // STEP 9: Display Decision
    if (storedUsername && storedEmail) {
        // Both exist: Ensure they are visible and assign content
        usernameElement.style.display = 'block';
        emailElement.style.display = 'block';
        
        usernameElement.textContent = `Username: ${storedUsername}`;
        emailElement.textContent = `Email: ${storedEmail}`;
    } else {
        // Either or both are missing: Hide them completely
        usernameElement.style.display = 'none';
        emailElement.style.display = 'none';
    }
}

// STEP 10 & 11: Sign Out Interaction
const signOutBtn = document.getElementById('signout-btn');
signOutBtn.addEventListener('click', function signOut() {
    // Clear session storage
    sessionStorage.removeItem('username');
    sessionStorage.removeItem('email');

    // STEP 12: Redirect back to sign in
    window.location.href = "signin.html";
});