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

// Function to fetch user data and update unread message bubble
function updateUnreadMessages() {
    // Parse cookies to get userID
    const cookies = document.cookie.split('; ').reduce((acc, curr) => {
        const [key, value] = curr.split('=');
        acc[key] = value;
        return acc;
    }, {});
    const userID = cookies.userLoggedIn;

    // Check if userID exists
    if (!userID) {
        console.error("User ID not found in cookies.");
        return;
    }

    // Fetch user profile data
    const timestamp = new Date().getTime();
    fetch(`/cache/${userID}-user.json?timestamp=${timestamp}`)
        .then(response => {
            if (!response.ok) {
                throw new Error(`Failed to fetch user profile data: ${response.statusText}`);
            }
            return response.json();
        })
        .then(userData => {
            // Check if the "unread" property exists and is greater than 0
            if (userData.unread && parseInt(userData.unread) > 0) {
                // Select the chat navigation link
                const chatNavLink = document.querySelector('.navbar .chat_status');

                if (chatNavLink) {
                    // Check if the bubble already exists, if not, create it
                    let bubble = chatNavLink.querySelector('.bubble');
                    if (!bubble) {
                        bubble = document.createElement('div');
                        bubble.className = 'bubble';
                        chatNavLink.appendChild(bubble);
                    }
                    // Update the bubble with the unread message count
                    bubble.textContent = userData.unread;
                }
            }
        })
        .catch(error => {
            console.error("Error fetching user data:", error);
        });
}

// Call the function to update unread messages
updateUnreadMessages();

