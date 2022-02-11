document.getElementById('login-submit').addEventListener('click', function(){
    // console.log('Button clicked');

    // Get user email
    const emailField = document.getElementById('user-email');
    const userEmail = emailField.value;
    // console.log(userEmail);

    // Get user password
    const passwordField = document.getElementById('user-password');
    const userPassword = passwordField.value;
    // console.log(userPassword);

    // Get user - Email & Password
    if(userEmail == 'masummolla@gmail.com' && userPassword == '111'){
        // console.log('valid user');
        window.location.href = "banking.html";
        
    }

});