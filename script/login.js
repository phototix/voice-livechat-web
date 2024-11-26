document.addEventListener("DOMContentLoaded", function () {
    const loginButton = document.getElementById("loginButton");
    const phoneInput = document.getElementById("phoneInput");
    const passwordInput = document.getElementById("passwordInput");

    loginButton.addEventListener("click", function (event) {
        event.preventDefault(); // Prevent form submission (if any)

        const enteredPhone = phoneInput.value;
        const enteredPassword = passwordInput.value;

        // Basic validation
        if (!enteredPhone || !enteredPassword) {
            alert("请填写所有字段！");
            return;
        }

        // Construct the JSON file path dynamically based on the entered username
        const userFile = `cache/${enteredPhone}-user.json`;

        // Fetch the user data from the dynamically constructed JSON file
        fetch(userFile)
            .then(response => {
                if (!response.ok) {
                    throw new Error("用户文件未找到");
                }
                return response.json();
            })
            .then(user => {
                if (enteredPhone === user.username && md5(enteredPassword) === user.password) {
                    // Save the login state in a cookie
                    document.cookie = `userLoggedIn=${user.userID}; path=/; max-age=${60 * 60 * 24};`;
                    window.location.href = "index.html";
                } else {
                    alert("用户名或密码错误！");
                }
            })
            .catch(error => {
                console.error("Error:", error);
                alert("登录失败，请稍后再试");
            });
    });
});

// Simple MD5 hash function using CryptoJS
function md5(string) {
    // Use CryptoJS.MD5 to generate the MD5 hash
    return CryptoJS.MD5(string).toString(CryptoJS.enc.Base64); // You can also use .toString(CryptoJS.enc.Hex) for hexadecimal
}