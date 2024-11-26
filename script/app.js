// script/app.js

// Function to check user login session
function checkLoginSession() {
    // Simulate checking session storage for a logged-in user
    const userLoggedIn = sessionStorage.getItem('userLoggedIn');

    // Pages that require login
    const restrictedPages = ['me.html', 'chat.html'];
    const currentPage = window.location.pathname.split('/').pop();

    if (restrictedPages.includes(currentPage) && !userLoggedIn) {
        // Redirect to login.html if not logged in
        window.location.href = 'login.html';
    }
}

// Function to handle login action
function handleLogin(username, password) {
    // Simulate login validation
    if (username === 'user' && password === 'password') {
        sessionStorage.setItem('userLoggedIn', true); // Mark as logged in
        alert('Login successful!');
        window.location.href = 'index.html'; // Redirect to homepage or any page
    } else {
        alert('Invalid credentials. Please try again.');
    }
}

// Function to handle logout action
function handleLogout() {
    sessionStorage.removeItem('userLoggedIn'); // Clear login session
    alert('Logged out successfully.');
    window.location.href = 'login.html'; // Redirect to login page
}

// Run session check on every page load
checkLoginSession();
