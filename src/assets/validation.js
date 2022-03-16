function error(errormess) {
    var password = document.getElementById('pass');
    var username = document.getElementById('username');
    if (errormess === 'Wrong password.') {
        password.style.borderColor = "red";
    }
    if (errormess === 'User not found.') {
        password.style.borderColor = "red";
        username.style.borderColor = "red";
    }
}