// Simulate login process and save a cookie
document.addEventListener("DOMContentLoaded", function () {
    const loginButton = document.getElementById("loginButton");
    const phoneInput = document.getElementById("phoneInput");
    const passwordInput = document.getElementById("passwordInput");

    loginButton.addEventListener("click", function () {
        const enteredPhone = phoneInput.value;
        const enteredPassword = passwordInput.value;

        // Construct the JSON file path dynamically based on the entered username
        const userFile = `cache/${enteredPhone}-user.json`;

        // Fetch the user data from the dynamically constructed JSON file
        fetch(userFile)
            .then(response => {
                if (!response.ok) {
                    throw new Error("User file not found");
                }
                return response.json();
            })
            .then(user => {
                if (enteredPhone === user.username && md5(enteredPassword) === user.password) {
                    // Save the login state in a cookie
                    document.cookie = `userLoggedIn=${user.userID}; path=/; max-age=${60 * 60 * 24};`;
                    window.location.href = "index.html";
                } else {
                    
                }
            })
            .catch(error => {
                console.error("Error:", error);
            });
    });
});

// Simple MD5 hash function using CryptoJS
function md5(string) {
    // Use CryptoJS.MD5 to generate the MD5 hash
    return CryptoJS.MD5(string).toString(CryptoJS.enc.Base64); // You can also use .toString(CryptoJS.enc.Hex) for hexadecimal
}
