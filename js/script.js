document.getElementById('login-submit').addEventListener('click', function(event){
    // get user Email
    const emailField = document.getElementById('user-email');
    const userEmail = emailField.value;
    // ger user password
    const passwordField = document.getElementById('user-password');
    const userPassword = passwordField.value;
    // check email and password
    if(userEmail == 'mamun@gmail.com' && userPassword == 'mamun'){
        window.location = 'bank.html'
    }
})