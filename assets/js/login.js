document.getElementById('login-submit').addEventListener('click', function () {
    // console.log("clicked")

    // Get user email
    const emailField = document.getElementById('user-email');
    const userEmail = emailField.value;
    // console.log(userEmail)


    // Get user password
    const emailPassword = document.getElementById('user-password');
    const userPassword = emailPassword.value;
    // console.log(userPassword);


    // Get user email & password
    if (userEmail == 'masummolla@gmail.com' && userPassword == '1234') {
        console.log("valid");
        window.location.href = './banking.html'
    }
    else {
        // console.log("wrong")
        alert("Please enter a valid email");
    }
});
