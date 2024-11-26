// script/app.js

// Function to check user login session
function checkLoginSession() {
    // Simulate checking session storage for a logged-in user
    const userLoggedIn = sessionStorage.getItem('userLoggedIn');

    // Log the session value for debugging
    console.log('User Logged In:', userLoggedIn);

    // Pages that require login
    const restrictedPages = ['me.html', 'chat.html'];
    const currentPage = window.location.pathname.split('/').pop();

    // If the page is restricted and the user is not logged in
    if (restrictedPages.includes(currentPage) && !userLoggedIn) {
        // Log and debug redirection
        console.log('Redirecting to login page');
        // Redirect to login.html if not logged in
        window.location.href = 'login.html';
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
